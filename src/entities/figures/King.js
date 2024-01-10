import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-king.svg';
import whiteFigure from '../../assets/images/white-king.svg';
import {FigureNames} from "../../data/FigureNames.js";

export class King extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.cell = cell;
		this.color = color;
		this.name = FigureNames.KING;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(target) {
		if(!super.canMove(target)) {
			return false;
		}
		
		const absX = Math.abs(this.cell.x - target.x);
		const absY = Math.abs(this.cell.y - target.y);
		
		if(absX > 1 || absY > 1) {
			return false;
		}
		
		if(this.isAttack(target)) return false;
		if(!this.isAttack(target)) return true;
		
		return true
	}
	
	isAttack(target) {
		for (let i = 0; i < this.cell.board.cells.length; i++) {
			let row = this.cell.board.cells[i];
			for (let j = 0; j < row.length; j++) {
				let cell = row[j];
				if (cell.figure !== null && cell.figure.color !== this.color) {
					if (cell.figure.name === FigureNames.PAWN) {
						return !!cell.figure.canEatFigure(target);
					}
					if (cell.figure.name !== FigureNames.PAWN) {
						return !!cell.figure.canMove(target);
					}
				}
			}
		}
		return false;
	}
	
	
}