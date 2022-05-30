/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramDataDiagram, DDiagramDataOptions } from "./d-diagram-data";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";
import { DDiagramDataPrivate } from "./d-diagram-data-private";
import { DDiagramDataPrivateImpl } from "./d-diagram-data-private-impl";
import { DDiagramDataRemote } from "./d-diagram-data-remote";
import { DDiagramDataRemoteImpl } from "./d-diagram-data-remote-impl";

/**
 * A data helper class for diagrams.
 */
export class DDiagramDataImpl {
	protected _diagram: DDiagramDataDiagram;
	protected _mapper: DDiagramDataMapper | null;
	protected _remote: DDiagramDataRemote;
	protected _private: DDiagramDataPrivate;

	constructor(diagram: DDiagramDataDiagram, options?: DDiagramDataOptions) {
		this._diagram = diagram;
		this._mapper = (options && options.mapper) || null;
		this._remote = new DDiagramDataRemoteImpl(options && options.remote);
		this._private = new DDiagramDataPrivateImpl(diagram);
	}

	update(): void {
		// DO NOTHING
	}

	get mapper(): DDiagramDataMapper | null {
		return this._mapper;
	}

	set mapper(mapper: DDiagramDataMapper | null) {
		this._mapper = mapper;
	}

	get remote(): DDiagramDataRemote {
		return this._remote;
	}

	get private(): DDiagramDataPrivate {
		return this._private;
	}

	get ids(): string[] {
		const canvas = this._diagram.canvas;
		if (canvas) {
			return canvas.data.ids;
		}
		return [];
	}

	each(callback: (id: string) => boolean | void): string | null {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.each(callback);
		}
		return null;
	}

	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.set(id, value, time, from, to);
		}
		return false;
	}

	clear(id: string): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.clear(id);
		}
		return false;
	}

	setAll(
		id: string,
		values: unknown[],
		times?: number[],
		from?: number | null,
		to?: number | null
	): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.setAll(id, values, times, from, to);
		}
		return false;
	}

	setValue(id: string, value: unknown, time?: number): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.setValue(id, value, time);
		}
		return false;
	}

	setValues(id: string, values: unknown[], times?: number[]): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.setValues(id, values, times);
		}
		return false;
	}

	setTime(id: string, time: number): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.setTime(id, time);
		}
		return false;
	}

	setTimes(id: string, times: number[]): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.setTimes(id, times);
		}
		return false;
	}

	setRange(id: string, from?: number | null, to?: number | null): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.setRange(id, from, to);
		}
		return false;
	}
}