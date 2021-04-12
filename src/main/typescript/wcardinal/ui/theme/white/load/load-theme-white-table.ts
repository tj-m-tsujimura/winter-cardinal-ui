/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteTable } from "../d-theme-white-table";
import { DThemeWhiteTableBody } from "../d-theme-white-table-body";
import { DThemeWhiteTableBodyCellActionDialog } from "../d-theme-white-table-body-cell-action-dialog";
import { DThemeWhiteTableBodyCellActionMenu } from "../d-theme-white-table-body-cell-action-menu";
import { DThemeWhiteTableBodyCellActionPromise } from "../d-theme-white-table-body-cell-action-promise";
import { DThemeWhiteTableBodyCellButton } from "../d-theme-white-table-body-cell-button";
import { DThemeWhiteTableBodyCellCheck } from "../d-theme-white-table-body-cell-check";
import { DThemeWhiteTableBodyCellColor } from "../d-theme-white-table-body-cell-color";
import { DThemeWhiteTableBodyCellDate } from "../d-theme-white-table-body-cell-date";
import { DThemeWhiteTableBodyCellDatetime } from "../d-theme-white-table-body-cell-datetime";
import { DThemeWhiteTableBodyCellIndex } from "../d-theme-white-table-body-cell-index";
import { DThemeWhiteTableBodyCellInputInteger } from "../d-theme-white-table-body-cell-input-integer";
import { DThemeWhiteTableBodyCellInputReal } from "../d-theme-white-table-body-cell-input-real";
import { DThemeWhiteTableBodyCellInputText } from "../d-theme-white-table-body-cell-input-text";
import { DThemeWhiteTableBodyCellInputTree } from "../d-theme-white-table-body-cell-input-tree";
import { DThemeWhiteTableBodyCellInputTreeInput } from "../d-theme-white-table-body-cell-input-tree-input";
import { DThemeWhiteTableBodyCellInputTreeMarker } from "../d-theme-white-table-body-cell-input-tree-marker";
import { DThemeWhiteTableBodyCellLink } from "../d-theme-white-table-body-cell-link";
import { DThemeWhiteTableBodyCellSelectDialog } from "../d-theme-white-table-body-cell-select-dialog";
import { DThemeWhiteTableBodyCellSelectMenu } from "../d-theme-white-table-body-cell-select-menu";
import { DThemeWhiteTableBodyCellSelectMultiple } from "../d-theme-white-table-body-cell-select-multiple";
import { DThemeWhiteTableBodyCellSelectPromise } from "../d-theme-white-table-body-cell-select-promise";
import { DThemeWhiteTableBodyCellText } from "../d-theme-white-table-body-cell-text";
import { DThemeWhiteTableBodyCellTime } from "../d-theme-white-table-body-cell-time";
import { DThemeWhiteTableBodyCellTree } from "../d-theme-white-table-body-cell-tree";
import { DThemeWhiteTableBodyRow } from "../d-theme-white-table-body-row";
import { DThemeWhiteTableCategory } from "../d-theme-white-table-category";
import { DThemeWhiteTableCategoryCell } from "../d-theme-white-table-category-cell";
import { DThemeWhiteTableHeader } from "../d-theme-white-table-header";
import { DThemeWhiteTableHeaderCell } from "../d-theme-white-table-header-cell";
import { DThemeWhiteTableRow } from "../d-theme-white-table-row";
import { loadThemeWhiteButtonCheck } from "./load-theme-white-button-check";
import { loadThemeWhiteButtonColor } from "./load-theme-white-button-color";
import { loadThemeWhiteButtonDate } from "./load-theme-white-button-date";
import { loadThemeWhiteButtonDatetime } from "./load-theme-white-button-datetime";
import { loadThemeWhiteDialogSelect } from "./load-theme-white-dialog-select";
import { loadThemeWhiteInputInteger } from "./load-theme-white-input-integer";
import { loadThemeWhiteInputReal } from "./load-theme-white-input-real";
import { loadThemeWhiteInputText } from "./load-theme-white-input-text";
import { loadThemeWhiteMenu } from "./load-theme-white-menu";

export const loadThemeWhiteTable = (): void => {
	DThemeWhite.set("DTableBodyCellActionDialog", DThemeWhiteTableBodyCellActionDialog);
	DThemeWhite.set("DTableBodyCellActionMenu", DThemeWhiteTableBodyCellActionMenu);
	DThemeWhite.set("DTableBodyCellActionPromise", DThemeWhiteTableBodyCellActionPromise);
	DThemeWhite.set("DTableBodyCellButton", DThemeWhiteTableBodyCellButton);
	DThemeWhite.set("DTableBodyCellCheck", DThemeWhiteTableBodyCellCheck);
	DThemeWhite.set("DTableBodyCellColor", DThemeWhiteTableBodyCellColor);
	DThemeWhite.set("DTableBodyCellDate", DThemeWhiteTableBodyCellDate);
	DThemeWhite.set("DTableBodyCellDatetime", DThemeWhiteTableBodyCellDatetime);
	DThemeWhite.set("DTableBodyCellIndex", DThemeWhiteTableBodyCellIndex);
	DThemeWhite.set("DTableBodyCellInputInteger", DThemeWhiteTableBodyCellInputInteger);
	DThemeWhite.set("DTableBodyCellInputReal", DThemeWhiteTableBodyCellInputReal);
	DThemeWhite.set("DTableBodyCellInputText", DThemeWhiteTableBodyCellInputText);
	DThemeWhite.set("DTableBodyCellInputTreeMarker", DThemeWhiteTableBodyCellInputTreeMarker);
	DThemeWhite.set("DTableBodyCellInputTreeInput", DThemeWhiteTableBodyCellInputTreeInput);
	DThemeWhite.set("DTableBodyCellInputTree", DThemeWhiteTableBodyCellInputTree);
	DThemeWhite.set("DTableBodyCellLink", DThemeWhiteTableBodyCellLink);
	DThemeWhite.set("DTableBodyCellSelectDialog", DThemeWhiteTableBodyCellSelectDialog);
	DThemeWhite.set("DTableBodyCellSelectMenu", DThemeWhiteTableBodyCellSelectMenu);
	DThemeWhite.set("DTableBodyCellSelectMultiple", DThemeWhiteTableBodyCellSelectMultiple);
	DThemeWhite.set("DTableBodyCellSelectPromise", DThemeWhiteTableBodyCellSelectPromise);
	DThemeWhite.set("DTableBodyCellText", DThemeWhiteTableBodyCellText);
	DThemeWhite.set("DTableBodyCellTree", DThemeWhiteTableBodyCellTree);
	DThemeWhite.set("DTableBodyCellTime", DThemeWhiteTableBodyCellTime);
	DThemeWhite.set("DTableBodyRow", DThemeWhiteTableBodyRow);
	DThemeWhite.set("DTableBody", DThemeWhiteTableBody);
	DThemeWhite.set("DTableCategoryCell", DThemeWhiteTableCategoryCell);
	DThemeWhite.set("DTableCategory", DThemeWhiteTableCategory);
	DThemeWhite.set("DTableHeaderCell", DThemeWhiteTableHeaderCell);
	DThemeWhite.set("DTableHeader", DThemeWhiteTableHeader);
	DThemeWhite.set("DTableRow", DThemeWhiteTableRow);
	DThemeWhite.set("DTable", DThemeWhiteTable);
	loadThemeWhiteButtonCheck();
	loadThemeWhiteButtonColor();
	loadThemeWhiteButtonDate();
	loadThemeWhiteButtonDatetime();
	loadThemeWhiteInputInteger();
	loadThemeWhiteInputReal();
	loadThemeWhiteInputText();
	loadThemeWhiteDialogSelect();
	loadThemeWhiteMenu();
};
