import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-bishop.svg';
import whiteFigure from '../../assets/images/white-bishop.svg';
import {FigureNames} from "../../data/FigureNames.js";

export class Bishop extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.cell = cell;
		this.color = color;
		this.name = FigureNames.BISHOP;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(cell) {
		if(!super.canMove(cell)) return false;
		
		if(this.cell.isEmptyDiagonal(cell)) {
			return true;
		}
		
		return false;
	}
}