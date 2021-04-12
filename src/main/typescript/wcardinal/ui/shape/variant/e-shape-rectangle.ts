/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";

export class EShapeRectangle extends EShapePrimitive {
	constructor(type = EShapeType.RECTANGLE) {
		super(type);
	}

	clone(): EShapeRectangle {
		return new EShapeRectangle().copy(this);
	}

	containsAbs(x: number, y: number, ax: number, ay: number): boolean {
		if (super.containsAbsBBox(x, y, ax, ay)) {
			const fill = this.fill;
			const stroke = this.stroke;
			if (fill.enable) {
				return true;
			} else {
				const strokeWidth = stroke.width;
				const strokeSide = stroke.side;
				if (stroke.enable && 0 < strokeWidth && strokeSide !== EShapeStrokeSide.NONE) {
					const wx = Math.max(0.0, ax - strokeWidth);
					const wy = Math.max(0.0, ay - strokeWidth);
					if (!this.containsAbsBBox(x, y, wx, wy)) {
						if (strokeSide === EShapeStrokeSide.ALL) {
							return true;
						} else {
							if (x <= -wx) {
								if (y <= -wy) {
									return !!(strokeSide & EShapeStrokeSide.TOP_OR_LEFT);
								} else if (+wy <= y) {
									return !!(strokeSide & EShapeStrokeSide.BOTTOM_OR_LEFT);
								} else {
									return !!(strokeSide & EShapeStrokeSide.LEFT);
								}
							} else if (+wx <= x) {
								if (y <= -wy) {
									return !!(strokeSide & EShapeStrokeSide.TOP_OR_RIGHT);
								} else if (+wy <= y) {
									return !!(strokeSide & EShapeStrokeSide.BOTTOM_OR_RIGHT);
								} else {
									return !!(strokeSide & EShapeStrokeSide.RIGHT);
								}
							} else {
								if (y <= -wy) {
									return !!(strokeSide & EShapeStrokeSide.TOP);
								} else if (+wy <= y) {
									return !!(strokeSide & EShapeStrokeSide.BOTTOM);
								} else {
									return false;
								}
							}
						}
					}
				}
			}
		}
		return false;
	}
}
