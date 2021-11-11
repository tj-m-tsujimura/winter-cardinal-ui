/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogSelectListOptions, DLayoutHorizontalOptions } from ".";
import { DBase } from "./d-base";
import {
	DDialogCommand,
	DDialogCommandEvents,
	DDialogCommandOptions,
	DThemeDialogCommand
} from "./d-dialog-command";
import { DDialogSelectList } from "./d-dialog-select-list";
import { DDialogSelectSearh } from "./d-dialog-select-search";
import { DInputSearch, DInputSearchOptions } from "./d-input-search";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DLayoutVertical } from "./d-layout-vertical";
import { DListOptions } from "./d-list";
import { DListDataSelection } from "./d-list-data-selection";
import { DNote, DNoteOptions } from "./d-note";
import { DOnOptions } from "./d-on-options";
import { isNumber } from "./util/is-number";
import { UtilTransition } from "./util/util-transition";

export interface DDialogSelectInputMargin {
	horizontal: number;
	vertical: number;
}

export interface DDialogSelectInputMarginOptions extends Partial<DDialogSelectInputMargin> {}

export interface DDialogSelectInputOpitons extends DInputSearchOptions {
	margin?: DDialogSelectInputMarginOptions;
}

/**
 * {@link DDialogSelect} search object.
 */
export interface DDialogSelectSearch<VALUE> {
	create(args: [string]): void;
	on(event: "success", handler: (e: unknown, searchResults: VALUE[]) => void): void;
	on(event: "change", handler: () => void): void;
	isDone(): boolean;
	getResult(): VALUE[] | null;
}

/**
 * {@link DDialogSelect} search function.
 */
export type DDialogSelectSearchFunction<VALUE> = (word: string) => Promise<VALUE[]>;

/**
 * {@link DDialogSelect} controller.
 */
export interface DDialogSelectController<VALUE> {
	search: DDialogSelectSearch<VALUE> | DDialogSelectSearchFunction<VALUE>;
}

/**
 * {@link DDialogSelect} note options.
 */
export interface DDialogSelectNoteOptions {
	noItems?: DNoteOptions;
	searching?: DNoteOptions;
}

export type DDialogSelectItemToLabel<VALUE> = (result: VALUE, caller: any) => string;

export type DDialogSelectItemIsEqual<VALUE> = (a: VALUE, b: VALUE, caller: any) => boolean;

/**
 * {@link DDialogSelect} events.
 */
export interface DDialogSelectEvents<VALUE, EMITTER> extends DDialogCommandEvents<VALUE, EMITTER> {
	select(value: VALUE, self: EMITTER): void;
}

/**
 * {@link DDialogSelect} "on" options.
 */
export interface DDialogSelectOnOptions<VALUE, EMITTER>
	extends Partial<DDialogSelectEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DDialogSelect} options.
 */
export interface DDialogSelectOptions<
	VALUE,
	THEME extends DThemeDialogSelect<VALUE> = DThemeDialogSelect<VALUE>,
	EMITTER = any
> extends DDialogCommandOptions<VALUE, THEME> {
	controller?: DDialogSelectController<VALUE>;
	input?: DDialogSelectInputOpitons;
	list?: DListOptions<VALUE>;
	note?: DDialogSelectNoteOptions;
	on?: DDialogSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogSelect} theme.
 */
export interface DThemeDialogSelect<VALUE = unknown> extends DThemeDialogCommand {
	getNoteNoItemsText(): string;
	getNoteSearchingText(): string;
	getInputMarginVertical(): number;
	getInputMarginHorizontal(): number;
}

export class DDialogSelect<
	VALUE = unknown,
	THEME extends DThemeDialogSelect<VALUE> = DThemeDialogSelect<VALUE>,
	OPTIONS extends DDialogSelectOptions<VALUE, THEME> = DDialogSelectOptions<VALUE, THEME>
> extends DDialogCommand<VALUE | null, THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _input!: DInputSearch;
	protected _list!: DDialogSelectList<VALUE>;
	protected _search!: DDialogSelectSearch<VALUE>;
	protected _noteNoItems!: DNote;
	protected _noteSearching!: DNote;

	protected onInit(layout: DLayoutVertical, options?: OPTIONS): void {
		this._value = null;
		const theme = this.theme;

		// Search box
		const input = this.newInput(theme, options);
		this._input = input;
		layout.addChild(this.newInputLayout(layout, input, theme, options));

		// List
		const list = this.newList(theme, options);
		this._list = list;
		layout.addChild(list);

		// Text No Items
		const noteNoItems = this.newNoteNoItems(list, theme, options);
		this._noteNoItems = noteNoItems;

		// Text Searching
		const noteSearching = this.newNoteSearching(list, theme, options);
		this._noteSearching = noteSearching;

		// Controller binding
		const search = this.toSearch(options?.controller);
		this._search = search;
		input.on("input", (value: string): void => {
			search.create([value]);
		});

		search.on("success", (e: unknown, results: VALUE[]): void => {
			this.onSearched(results);
		});

		// Visibility
		const transition = new UtilTransition();
		search.on("change", (): void => {
			if (search.isDone()) {
				const result = search.getResult();
				if (result != null && 0 < result.length) {
					transition.hide();
				} else {
					transition.show(noteNoItems);
				}
			} else {
				transition.show(noteSearching);
			}
		});
	}

	protected newInput(theme: THEME, options?: OPTIONS): DInputSearch {
		return new DInputSearch(this.toInputOptions(theme, options));
	}

	protected toInputOptions(theme: THEME, options?: OPTIONS): DInputSearchOptions {
		const result = options?.input || {};
		if (result.width === undefined && result.weight === undefined) {
			result.weight = 1;
		}
		return result;
	}

	protected newInputLayout(
		layout: DLayoutHorizontal | DLayoutVertical,
		input: DInputSearch,
		theme: THEME,
		options: OPTIONS | undefined
	): DLayoutHorizontal {
		return new DLayoutHorizontal(this.toInputLayoutOptions(layout, input, theme, options));
	}

	protected toInputLayoutOptions(
		layout: DLayoutHorizontal | DLayoutVertical,
		input: DInputSearch,
		theme: THEME,
		options: OPTIONS | undefined
	): DLayoutHorizontalOptions {
		const margin = this.toInputMargin(theme, options);
		const marginHorizontal = margin.horizontal;
		const marginVertical = margin.vertical + this.padding.getTop() - layout.margin.vertical;
		return {
			width: "padding",
			height: "auto",
			padding: {
				bottom: Math.max(0, marginVertical)
			},
			children: [
				new DLayoutSpace({ width: marginHorizontal }),
				input,
				new DLayoutSpace({ width: marginHorizontal })
			]
		};
	}

	protected toInputMargin(theme: THEME, options?: OPTIONS): DDialogSelectInputMargin {
		const margin = options?.input?.margin;
		if (margin != null) {
			if (isNumber(margin)) {
				return {
					horizontal: margin,
					vertical: margin
				};
			} else {
				const horizontal = margin.horizontal;
				const vertical = margin.vertical;
				return {
					horizontal: horizontal ?? theme.getInputMarginHorizontal(),
					vertical: vertical ?? theme.getInputMarginVertical()
				};
			}
		}
		return {
			horizontal: theme.getInputMarginHorizontal(),
			vertical: theme.getInputMarginVertical()
		};
	}

	protected toListOptions(theme: THEME, options?: OPTIONS): DDialogSelectListOptions<VALUE> {
		const result = options?.list || {};
		if (result.width === undefined) {
			result.width = "padding";
		}
		return result;
	}

	protected newList(theme: THEME, options?: OPTIONS): DDialogSelectList<VALUE> {
		const result = new DDialogSelectList<VALUE>(this.toListOptions(theme, options));
		result.selection.on("change", (selection: DListDataSelection<VALUE>): void => {
			const first = selection.first;
			if (first != null) {
				this._value = first;
				this.onOk(first);
			}
		});
		return result;
	}

	protected toNoteOptions(parent: DBase, text: string, options?: DNoteOptions): DNoteOptions {
		if (options != null) {
			if (options.parent == null) {
				options.parent = parent;
			}
			if (options.text == null) {
				options.text = {
					value: text
				};
			} else if (options.text.value == null) {
				options.text.value = text;
			}
			return options;
		}
		return {
			parent,
			text: {
				value: text
			}
		};
	}

	protected toNoteNoItemsOptions(
		list: DDialogSelectList<VALUE>,
		theme: THEME,
		options?: OPTIONS
	): DNoteOptions {
		return this.toNoteOptions(list, theme.getNoteNoItemsText(), options?.note?.noItems);
	}

	protected newNoteNoItems(
		list: DDialogSelectList<VALUE>,
		theme: THEME,
		options?: OPTIONS
	): DNote {
		return new DNote(this.toNoteNoItemsOptions(list, theme, options));
	}

	protected toNoteSearchingOptions(
		list: DDialogSelectList<VALUE>,
		theme: THEME,
		options?: OPTIONS
	): DNoteOptions {
		return this.toNoteOptions(list, theme.getNoteSearchingText(), options?.note?.searching);
	}

	protected newNoteSearching(
		list: DDialogSelectList<VALUE>,
		theme: THEME,
		options?: OPTIONS
	): DNote {
		return new DNote(this.toNoteSearchingOptions(list, theme, options));
	}

	protected toSearch(controller?: DDialogSelectController<VALUE>): DDialogSelectSearch<VALUE> {
		if (controller) {
			const search = controller.search;
			if ("create" in search) {
				return search;
			} else {
				return new DDialogSelectSearh(search);
			}
		} else {
			return new DDialogSelectSearh();
		}
	}

	get input(): DInputSearch {
		return this._input;
	}

	get list(): DDialogSelectList<VALUE> {
		return this._list;
	}

	get value(): VALUE | null {
		return this._value;
	}

	protected onSearched(results: VALUE[]): void {
		this._list.data.items = results;
	}

	protected getResolvedValue(): VALUE | null | PromiseLike<VALUE | null> {
		return this._value;
	}

	protected getType(): string {
		return "DDialogSelect";
	}

	protected onOpen(): void {
		super.onOpen();
		this._list.selection.clear();
		this._search.create([this._input.value]);
	}

	protected onOk(value: VALUE | null | PromiseLike<VALUE | null>): void {
		this.emit("select", value, this);
		super.onOk(value);
	}

	destroy(): void {
		this._input.destroy();
		this._noteNoItems.destroy();
		this._noteSearching.destroy();
		this._list.destroy();
		super.destroy();
	}
}
