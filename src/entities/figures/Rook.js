import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-rook.svg';
import whiteFigure from '../../assets/images/white-rook.svg';

export class Rook extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.cell = cell;
		this.color = color;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(cell) {
		if(!super.canMove(cell)) return false;
		
		if(this.cell.isEmptyVertical(cell) || this.cell.isEmptyHorizontal(cell)) {
			return true
		}
		
		return false;
	}
}