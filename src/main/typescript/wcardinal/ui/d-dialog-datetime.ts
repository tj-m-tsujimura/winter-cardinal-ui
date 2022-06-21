/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DDialogFitted, DDialogFittedOptions, DThemeDialogFitted } from "./d-dialog-fitted";
import { DPickerDatetime, DPickerDatetimeOptions } from "./d-picker-datetime";

export interface DDialogDatetimeOptions<THEME extends DThemeDialogDatetime = DThemeDialogDatetime>
	extends DDialogFittedOptions<Date, THEME> {
	picker?: DPickerDatetimeOptions;
}

export interface DThemeDialogDatetime extends DThemeDialogFitted {}

export class DDialogDatetime<
	THEME extends DThemeDialogDatetime = DThemeDialogDatetime,
	OPTIONS extends DDialogDatetimeOptions<THEME> = DDialogDatetimeOptions<THEME>
> extends DDialogFitted<Date, THEME, OPTIONS> {
	protected _picker?: DPickerDatetime;

	protected newContentChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		const result = super.newContentChildren(theme, options);
		result.push(this.picker);
		return result;
	}

	get current(): Date {
		return this.picker.current;
	}

	set current(dateCurrent: Date) {
		this.picker.current = dateCurrent;
	}

	get new(): Date {
		return this.picker.new;
	}

	set new(value: Date) {
		this.picker.new = value;
	}

	get page(): Date {
		return this.picker.new;
	}

	set page(page: Date) {
		this.picker.page = page;
	}

	get picker(): DPickerDatetime {
		let result = this._picker;
		if (result == null) {
			result = new DPickerDatetime(this._options?.picker);
			this._picker = result;
		}
		return result;
	}

	protected getResolvedValue(): Date | PromiseLike<Date> {
		return this.picker.new;
	}

	protected getType(): string {
		return "DDialogDatetime";
	}
}
