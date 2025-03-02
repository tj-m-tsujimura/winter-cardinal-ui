/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogInputBoolean } from "../../d-dialog-input-boolean";
import { EShape } from "../e-shape";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeOpenDialog } from "./e-shape-action-runtime-open-dialog";
import { EShapeActionValueOpenDialog } from "./e-shape-action-value-open-dialog";

export class EShapeActionRuntimeOpenDialogBoolean extends EShapeActionRuntimeOpenDialog<boolean> {
	protected static DIALOG?: DDialogInputBoolean;
	protected initial: EShapeActionExpression<boolean>;

	constructor(value: EShapeActionValueOpenDialog) {
		super(value);
		this.initial = EShapeActionExpressions.ofBooleanOrFalse(value.initial);
	}

	protected open(
		shape: EShape,
		target: string,
		initial: boolean,
		step: number | null,
		min: number | null,
		max: number | null
	): Promise<boolean> {
		let dialog = EShapeActionRuntimeOpenDialogBoolean.DIALOG;
		if (dialog == null) {
			dialog = new DDialogInputBoolean({
				header: {
					text: {
						value: target
					},
					button: {
						close: false
					}
				}
			});
			EShapeActionRuntimeOpenDialogBoolean.DIALOG = dialog;
		} else {
			const header = dialog.header;
			if (header) {
				header.text = target;
			}
		}
		dialog.value = initial;
		return dialog.open(shape);
	}
}
