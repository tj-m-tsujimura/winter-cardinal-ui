/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DeepPartial } from "../util/deep-partial";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeTextAlign, EShapeTextAlignLike } from "./e-shape-text-align";
import { EShapeTextDirection } from "./e-shape-text-direction";
import { EShapeTextOffset, EShapeTextOffsetLike } from "./e-shape-text-offset";
import { EShapeTextOutline, EShapeTextOutlineLike } from "./e-shape-text-outline";

export const EShapeTextWeight = {
	NORMAL: 0,
	BOLD: 1
} as const;

export type EShapeTextWeight = typeof EShapeTextWeight[keyof typeof EShapeTextWeight];

export const EShapeTextStyle = {
	NORMAL: 0,
	ITALIC: 1
} as const;

export type EShapeTextStyle = typeof EShapeTextStyle[keyof typeof EShapeTextStyle];

export interface EShapeTextLike {
	value: string;
	color: number;
	alpha: number;
	family: string;
	size: number;
	weight: EShapeTextWeight;
	align: EShapeTextAlignLike;
	offset: EShapeTextOffsetLike;
	style: EShapeTextStyle;
	outline: EShapeTextOutlineLike;
	spacing: EShapeTextOffsetLike;
	direction: EShapeTextDirection;
	padding: EShapeTextOffsetLike;
	clipping: boolean;
	fitting: boolean;
}

export interface EShapeTextAtlasCharacter {
	x: number;
	y: number;
	width: number;
	height: number;
	advance: number;
	origin: {
		x: number;
		y: number;
	};
}

export type EShapeTextAtlasCharacters = Record<string, EShapeTextAtlasCharacter>;

export interface EShapeTextAtlas {
	width: number;
	height: number;
	font: {
		size: number;
	};
	characters: EShapeTextAtlasCharacters;
}

export interface EShapeText extends EShapeTextLike {
	enable: boolean;

	align: EShapeTextAlign;
	offset: EShapeTextOffset;
	outline: EShapeTextOutline;
	spacing: EShapeTextOffset;
	padding: EShapeTextOffset;

	texture?: Texture; // Used for rendering and updated when rendered
	atlas?: EShapeTextAtlas; // Used for rendering and updated when rendered
	world?: number[]; // Updated when rendered

	copy(target?: DeepPartial<EShapeTextLike>): this;
	set(
		value?: string,
		color?: number,
		alpha?: number,
		family?: string,
		size?: number,
		weight?: EShapeTextWeight,
		style?: EShapeTextStyle,
		direction?: EShapeTextDirection,
		clipping?: boolean,
		fitting?: boolean
	): this;
	toObject(): EShapeTextLike;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
