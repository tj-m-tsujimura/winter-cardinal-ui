/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationButtonTop } from "../../d-pagination-button-top";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("pagination_button_next", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="7 15 13 10 7 5"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkPaginationButtonNext
	extends DThemeDarkButtonAmbient<string>
	implements DThemePaginationButtonTop
{
	getWidth(): DCoordinateSize {
		return 30;
	}

	getImageSource(state: DBaseStateSet): PIXI.Texture | PIXI.DisplayObject | null {
		return DThemeDarkAtlas.mappings.pagination_button_next;
	}
}
