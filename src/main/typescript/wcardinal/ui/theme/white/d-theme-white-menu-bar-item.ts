/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuBarItem } from "../../d-menu-bar-item";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteMenuBarItem<VALUE = unknown>
	extends DThemeWhiteButton<VALUE>
	implements DThemeMenuBarItem<VALUE>
{
	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else if (state.isActive) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if (state.isHovered) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	getBorderColor(): number | null {
		return null;
	}

	getWidth(): DCoordinateSize {
		return "auto";
	}

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getTextStyleClipping(): boolean {
		return false;
	}
}
