import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-horse.svg';
import whiteFigure from '../../assets/images/white-horse.svg';
import {FigureNames} from "../../data/FigureNames.js";

export class Knight extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.cell = cell;
		this.color = color;
		this.name = FigureNames.KNIGHT
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(cell) {
		if(!super.canMove(cell)) return false;
		
		const hypotenuse = Math.sqrt(4 + 1);
		
		const absY = Math.abs(this.cell.y - cell.y);
		const absX = Math.abs(this.cell.x - cell.x);
		
		if(hypotenuse === Math.sqrt(absX ** 2 + absY ** 2)) {
			cell.isOnAttack = true
			return true;
		}
		
		return false;
	}
}
