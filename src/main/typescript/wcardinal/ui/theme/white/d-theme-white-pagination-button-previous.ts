/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationButtonTop } from "../../d-pagination-button-top";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("pagination_button_previous", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="13 15 7 10 13 5"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhitePaginationButtonPrevious
	extends DThemeWhiteButtonAmbient<string>
	implements DThemePaginationButtonTop
{
	getWidth(): DCoordinateSize {
		return 30;
	}

	getImageSource(state: DBaseStateSet): PIXI.Texture | PIXI.DisplayObject | null {
		return DThemeWhiteAtlas.mappings.pagination_button_previous;
	}
}
