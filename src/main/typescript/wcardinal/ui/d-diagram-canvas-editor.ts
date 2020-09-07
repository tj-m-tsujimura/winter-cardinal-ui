/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDiagramCanvasBase, DDiagramCanvasBaseOptions, DThemeDiagramCanvasBase } from "./d-diagram-canvas-base";
import { DDiagramSerialized, DDiagramSerializedItem, DDiagramSerializedVersion } from "./d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";
import { ESnapper } from "./snapper/e-snapper";
import { ESnapperTargetValueType } from "./snapper/e-snapper-target-value";
import { isNumber } from "./util/is-number";

export interface DDiagramCanvasEditorOptions<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor
> extends DDiagramCanvasBaseOptions<THEME> {
	snapper?: ESnapper;
}

export interface DThemeDiagramCanvasEditor extends DThemeDiagramCanvasBase {

}

export class DDiagramCanvasEditor<
	THEME extends DThemeDiagramCanvasEditor = DThemeDiagramCanvasEditor,
	OPTIONS extends DDiagramCanvasEditorOptions<THEME> = DDiagramCanvasEditorOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	protected _snapper?: ESnapper;
	protected _snapperGraphics?: Graphics;

	constructor( options: OPTIONS ) {
		super( options );

		const snapper = options.snapper;
		this._snapper = snapper;
		if( snapper ) {
			const snapperGraphics = new Graphics();
			snapperGraphics.visible = false;
			this.addChildAt( snapperGraphics, this.children.length - 1 );
			this._snapperGraphics = snapperGraphics;

			snapper.target.on( "change", (): void => {
				this.toDirty();
				DApplications.update( this );
			});
		}
	}

	serialize( id: number | undefined ): DDiagramSerialized {
		const manager = new EShapeResourceManagerSerialization();
		const items: DDiagramSerializedItem[] = [];
		const background = this._background;
		const backgroundColor = background.color;
		const backgroundAlpha = background.alpha;
		const snapper = this._snapper;
		return {
			version: DDiagramSerializedVersion,
			id,
			name: this.name,
			width: this.width,
			height: this.height,
			background: {
				color: isNumber( backgroundColor ) ? backgroundColor : 0xffffff,
				alpha: isNumber( backgroundAlpha ) ? backgroundAlpha : 0
			},
			tile: this._tile.serialize(),
			resources: manager.resources,
			tags: manager.tags,
			pieces: manager.pieces,
			layers: this._layer.serialize( manager, items ),
			items,
			snap: snapper && snapper.serialize()
		};
	}

	onReflow(): void {
		super.onReflow();

		const snapper = this._snapper;
		const snapperGraphics = this._snapperGraphics;
		if( snapper && snapperGraphics ) {
			const target = snapper.target;
			if( target.visible ) {
				const borderColor = 0x1e87f0;
				const borderWidth = 1;
				const borderAlpha = 0.5;
				const width = this.width + 0.5;
				const height = this.height + 0.5;
				const values = target.values;
				snapperGraphics.clear();
				snapperGraphics.lineStyle( 0, 0, 0, 0 );
				snapperGraphics.beginFill( borderColor, borderAlpha );
				for( let i = 0, imax = values.length; i < imax; ++i ) {
					const value = values[ i ];
					if( value.type === ESnapperTargetValueType.VERTICAL ) {
						snapperGraphics.drawRect( value.position, 0, borderWidth, height );
					} else {
						snapperGraphics.drawRect( 0, value.position, width, borderWidth );
					}
				}
				snapperGraphics.endFill();
				snapperGraphics.visible = true;
			} else {
				snapperGraphics.visible = false;
			}
		}
	}

	protected getType(): string {
		return "DDiagramCanvasEditor";
	}
}
