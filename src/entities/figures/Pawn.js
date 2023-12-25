import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-pawn.svg';
import whiteFigure from '../../assets/images/white-pawn.svg';

export class Pawn extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.cell = cell;
		this.color = color;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(cell) {
		if(!super.canMove(cell)) return false;
		
		return this.cell.y - cell.y <= 2;
	}
}