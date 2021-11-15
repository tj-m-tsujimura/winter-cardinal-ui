/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAcceptorType } from "./e-shape-acceptor-type";

export interface EShapeAcceptorEdge {
	type: EShapeAcceptorType;
	x: number;
	y: number;
}

export interface EShapeAcceptor {
	size(): number;
	add(id: string, type: EShapeAcceptorType, x: number, y: number): boolean;
	remove(id: string): EShapeAcceptorEdge | null;
	get(id: string): EShapeAcceptorEdge | null;
	each(iteratee: (edge: EShapeAcceptorEdge, id: string) => void): this;
	contains(id: string): boolean;
	clear(): boolean;
}