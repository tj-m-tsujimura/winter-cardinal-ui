/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableRow } from "../../d-table-row";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkTableRow extends DThemeDarkLayoutHorizontal implements DThemeTableRow {
	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusReverse = true;
	}
}
