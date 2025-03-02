/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogProcessing } from "../../d-dialog-processing";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

const message = (state: DBaseStateSet): string => {
	if (state.isSucceeded) {
		return "Processed successfully";
	} else if (state.isFailed) {
		return "Failed to process the request";
	} else {
		return "Processing...";
	}
};

export class DThemeWhiteDialogProcessing
	extends DThemeWhiteDialogConfirm
	implements DThemeDialogProcessing
{
	getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "OK",
				cancel: null
			}
		};
	}

	getMessage(): DStateAwareOrValue<string> {
		return message;
	}

	getDoneDelay(): number {
		return 400;
	}

	getCloseDelay(): number | null {
		return 600;
	}
}
