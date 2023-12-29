import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-queen.svg';
import whiteFigure from '../../assets/images/white-queen.svg';
import {FigureNames} from "../../data/FigureNames.js";

export class Queen extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.cell = cell;
		this.color = color;
		this.name = FigureNames.QUEEN;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(cell) {
		if(!super.canMove(cell)) return false;
		
		if(this.cell.isEmptyHorizontal(cell) || this.cell.isEmptyVertical(cell) || this.cell.isEmptyDiagonal(cell)) {
			return true
		}
		
		return false;
	}
}