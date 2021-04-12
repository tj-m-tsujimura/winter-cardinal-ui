/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogDatetime } from "../d-theme-white-dialog-datetime";
import { loadThemeWhitePickerDatetime } from "./load-theme-white-picker-datetime";

export const loadThemeWhiteDialogDatetime = (): void => {
	DThemeWhite.set("DDialogDatetime", DThemeWhiteDialogDatetime);
	loadThemeWhitePickerDatetime();
};
