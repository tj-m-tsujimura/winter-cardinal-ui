import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartTop extends DImagePieceLayouterPart {
	execute(ptop: number, marginAfter: boolean): void {
		const pieces = this.pieces;
		let y = ptop;
		if (marginAfter) {
			let margin = 0;
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				piece.image!.y = margin + y;
				y += piece.bound.height;
				margin = piece.margin.vertical;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				y += piece.margin.vertical;
				piece.image!.y = y;
				y += piece.bound.height;
			}
		}
	}
}
