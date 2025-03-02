import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartBottom extends DImagePieceLayouterPart {
	execute(pbottom: number, height: number): void {
		const pieces = this._pieces;
		let y = height - pbottom;
		if (this._text !== undefined) {
			let margin = 0;
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				y -= margin + piece.bound.height;
				piece.image!.y = y;
				margin = piece.margin.horizontal;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				y -= piece.margin.horizontal + piece.bound.height;
				piece.image!.y = y;
			}
		}
	}
}
