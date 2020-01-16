/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeNote } from "../../d-note";
import { DThemeDarkText } from "./d-theme-dark-text";

export class DThemeDarkNote extends DThemeDarkText implements DThemeNote {
	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.NONE;
	}
}
