/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationButtonPage } from "../../d-pagination-button-page";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

export class DThemeDarkPaginationButtonPage
	extends DThemeDarkButtonAmbient<number>
	implements DThemePaginationButtonPage
{
	getWidth(): DCoordinateSize {
		return 30;
	}

	newTextValue(): DStateAwareOrValueMightBe<number> {
		return 0;
	}

	getTextStyleClipping(): boolean {
		return false;
	}
}
