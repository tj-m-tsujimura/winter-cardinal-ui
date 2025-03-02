/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartSelection } from "./d-chart-selection";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import {
	DChartSeriesFillComputed,
	DChartSeriesFillComputedOptions
} from "./d-chart-series-fill-computed";
import { DChartSeriesFillComputedImpl } from "./d-chart-series-fill-computed-impl";
import { DChartSeriesFillImpl } from "./d-chart-series-fill-impl";
import {
	DChartSeriesPaddingComputed,
	DChartSeriesPaddingComputedOptions
} from "./d-chart-series-padding-computed";
import { DChartSeriesPaddingComputedImpl } from "./d-chart-series-padding-computed-impl";
import { DChartSeriesPaddingImpl } from "./d-chart-series-padding-impl";
import {
	DChartSeriesPointComputed,
	DChartSeriesPointComputedOptions
} from "./d-chart-series-point-computed";
import { DChartSeriesPointComputedImpl } from "./d-chart-series-point-computed-impl";
import { DChartSeriesPointImpl } from "./d-chart-series-point-impl";
import {
	DChartSeriesStrokeComputed,
	DChartSeriesStrokeComputedOptions
} from "./d-chart-series-stroke-computed";
import { DChartSeriesStrokeComputedImpl } from "./d-chart-series-stroke-computed-impl";
import { DChartSeriesStrokeImpl } from "./d-chart-series-stroke-impl";

export class DChartSeriesContainerImpl<CHART extends DBase = DBase>
	implements DChartSeriesContainer<CHART>
{
	protected static WORK_CALCHITPOINT: DChartSeriesHitResult = new DChartSeriesHitResult();

	protected _plotArea: DChartPlotArea<CHART>;
	protected _list: DChartSeries<CHART>[];
	protected _domain: DChartRegionImpl;
	protected _range: DChartRegionImpl;
	protected _selection: DChartSelection<CHART> | null;

	protected _fill: DChartSeriesFillImpl;
	protected _stroke: DChartSeriesStrokeImpl;
	protected _size: DChartSeriesPointImpl;
	protected _offset: DChartSeriesPointImpl;
	protected _padding: DChartSeriesPaddingImpl;

	constructor(plotArea: DChartPlotArea<CHART>, options?: DChartSeriesContainerOptions<CHART>) {
		this._plotArea = plotArea;
		this._domain = new DChartRegionImpl(NaN, NaN);
		this._range = new DChartRegionImpl(NaN, NaN);
		this._selection = options?.selection ?? null;

		this._fill = new DChartSeriesFillImpl(options?.fill);
		this._stroke = new DChartSeriesStrokeImpl(options?.stroke);
		this._size = new DChartSeriesPointImpl(options?.size);
		this._offset = new DChartSeriesPointImpl(options?.offset);
		this._padding = new DChartSeriesPaddingImpl(options?.padding);

		this._list = [];
	}

	newFill(
		index: number,
		options: DChartSeriesFillComputedOptions | undefined
	): DChartSeriesFillComputed {
		return DChartSeriesFillComputedImpl.from(this._fill, index, options);
	}

	newStroke(
		index: number,
		options: DChartSeriesStrokeComputedOptions | undefined
	): DChartSeriesStrokeComputed {
		return DChartSeriesStrokeComputedImpl.from(this._stroke, index, options);
	}

	newSize(
		index: number,
		options: DChartSeriesPointComputedOptions | undefined,
		x: number,
		y: number
	): DChartSeriesPointComputed {
		return DChartSeriesPointComputedImpl.from(this._size, index, options, x, y);
	}

	newOffset(
		index: number,
		options: DChartSeriesPointComputedOptions | undefined,
		x: number,
		y: number
	): DChartSeriesPointComputed {
		return DChartSeriesPointComputedImpl.from(this._offset, index, options, x, y);
	}

	newPadding(
		index: number,
		options: DChartSeriesPaddingComputedOptions | undefined
	): DChartSeriesPaddingComputed {
		return DChartSeriesPaddingComputedImpl.from(this._padding, index, options);
	}

	get plotArea(): DChartPlotArea<CHART> {
		return this._plotArea;
	}

	get selection(): DChartSelection<CHART> | null {
		return this._selection;
	}

	update(): void {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].update();
		}
		const selection = this._selection;
		if (selection) {
			selection.update();
		}
	}

	onRender(): void {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].onRender();
		}
		const selection = this._selection;
		if (selection) {
			selection.onRender();
		}
	}

	add(series: DChartSeries<CHART>): void {
		const list = this._list;
		series.bind(this, list.length);
		list.push(series);
	}

	get(index: number): DChartSeries<CHART> | null {
		const list = this._list;
		if (0 <= index && index < list.length) {
			return list[index];
		}
		return null;
	}

	indexOf(series: DChartSeries<CHART>): number {
		return this._list.indexOf(series);
	}

	clear(): this {
		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			list[i].destroy();
		}
		list.length = 0;
		return this;
	}

	size(): number {
		return this._list.length;
	}

	destroy(): void {
		this.clear();
		const selection = this._selection;
		if (selection) {
			selection.unbind();
		}
	}

	getDomain(coordinate: DChartCoordinate<CHART>, result: DChartRegion): DChartRegion {
		result.clear();

		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			const series = list[i];
			if (series.coordinate.x === coordinate) {
				const domain = series.domain;
				result.add(domain.from, domain.to);
			}
		}

		return result;
	}

	getRange(coordinate: DChartCoordinate<CHART>, result: DChartRegion): DChartRegion {
		result.clear();

		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			const series = list[i];
			if (series.coordinate.y === coordinate) {
				const range = series.range;
				result.add(range.from, range.to);
			}
		}

		return result;
	}

	get domain(): DChartRegion {
		const result = this._domain;
		result.clear();

		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			const domain = list[i].domain;
			result.add(domain.from, domain.to);
		}

		return result;
	}

	get range(): DChartRegion {
		const result = this._range;
		result.clear();

		const list = this._list;
		for (let i = 0, imax = list.length; i < imax; ++i) {
			const range = list[i].range;
			result.add(range.from, range.to);
		}

		return result;
	}

	hitTest(x: number, y: number): DChartSeries<CHART> | null {
		const list = this._list;
		for (let i = list.length - 1; 0 <= i; --i) {
			const series = list[i];
			if (series.hitTest(x, y)) {
				return series;
			}
		}
		return null;
	}

	calcHitPoint(x: number, y: number, result: DChartSeriesHitResult): DChartSeries<CHART> | null {
		let tmp1 = result;
		let tmp2 = DChartSeriesContainerImpl.WORK_CALCHITPOINT;
		const list = this._list;
		let closest: DChartSeries<CHART> | null = null;
		tmp2.distance = +Infinity;
		for (let i = list.length - 1; 0 <= i; --i) {
			const series = list[i];
			if (series.calcHitPoint(x, y, tmp1)) {
				if (tmp1.distance < tmp2.distance) {
					closest = series;
					const tmp = tmp1;
					tmp1 = tmp2;
					tmp2 = tmp;
				}
			}
		}
		if (closest && tmp2 !== result) {
			result.copyFrom(tmp2);
		}
		return closest;
	}
}
