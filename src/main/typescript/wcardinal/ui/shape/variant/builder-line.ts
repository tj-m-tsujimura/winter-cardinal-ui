/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import {
	buildLineClipping,
	buildLineIndex,
	buildLineUv,
	buildLineVertexStepAndColorFill,
	toLinePointCount,
	toLineVertexCount
} from "./build-line";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderLine extends BuilderBase {
	protected pointCount: number;
	protected pointId: number;
	protected pointsClosed: boolean;
	protected length: number;

	constructor(
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number
	) {
		super(vertexOffset, indexOffset, vertexCount, indexCount);
		this.pointId = -1;
		this.pointCount = 0;
		this.pointsClosed = false;
		this.length = 1;
	}

	init(buffer: EShapeBuffer): void {
		buffer.updateIndices();
		buildLineIndex(buffer.indices, this.vertexOffset, this.indexOffset, this.indexCount);
	}

	isCompatible(shape: EShape): boolean {
		const vcount = toLineVertexCount(toLinePointCount(shape.points), true);
		return vcount === this.vertexCount;
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
		this.updateLineClipping(buffer, shape);
		this.updateLineVertexStepAndColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
		this.updateLineUv(buffer, shape);
	}

	protected updateLineClipping(buffer: EShapeBuffer, shape: EShape): void {
		const points = shape.points;
		if (points) {
			const formatted = points.formatted;
			const pointCount = formatted.length;
			if (this.pointCount !== pointCount) {
				this.pointCount = pointCount;

				// Invalidate the pointId to update the vertices
				this.pointId = -1;

				buffer.updateClippings();
				buildLineClipping(
					buffer.clippings,
					this.vertexOffset,
					this.vertexCount,
					pointCount
				);
			}
		}
	}

	protected updateLineVertexStepAndColorFill(buffer: EShapeBuffer, shape: EShape): void {
		const points = shape.points;
		if (points) {
			const pointId = points.id;
			const formatted = points.formatted;
			const pointsClosed = !!(formatted.style & EShapePointsStyle.CLOSED);
			const isPointChanged = pointId !== this.pointId || pointsClosed !== this.pointsClosed;

			const stroke = shape.stroke;
			const strokeWidth = stroke.enable ? stroke.width : 0;
			const strokeStyle = stroke.style;
			const isStrokeWidthChanged =
				this.strokeWidth !== strokeWidth || this.strokeStyle !== strokeStyle;

			const transformLocalId = toTransformLocalId(shape);
			const isTransformChanged = this.transformLocalId !== transformLocalId;

			if (isPointChanged || isTransformChanged || isStrokeWidthChanged) {
				this.pointId = pointId;
				this.pointsClosed = pointsClosed;
				this.strokeWidth = strokeWidth;
				this.strokeStyle = strokeStyle;
				this.transformLocalId = transformLocalId;

				if (isPointChanged) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				buffer.updateVertices();
				buffer.updateSteps();
				buffer.updateColorFills();
				this.length = buildLineVertexStepAndColorFill(
					buffer.vertices,
					buffer.steps,
					buffer.colorFills,
					this.vertexOffset,
					this.vertexCount,
					this.pointCount,
					this.pointsClosed,
					formatted.values,
					formatted.segments,
					strokeWidth,
					strokeStyle,
					shape.transform.internalTransform
				);
			}
		}
	}

	protected updateLineUv(buffer: EShapeBuffer, shape: EShape): void {
		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			buildLineUv(
				buffer.uvs,
				buffer.colorFills,
				this.vertexOffset,
				this.vertexCount,
				toTextureUvs(texture),
				this.length
			);
		}
	}
}
