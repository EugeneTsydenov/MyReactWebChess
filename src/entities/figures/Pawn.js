import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-pawn.svg';
import whiteFigure from '../../assets/images/white-pawn.svg';

export class Pawn extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.isFirstStep = true;
		this.cell = cell;
		this.color = color;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(target) {
		if (!super.canMove(target)) {
			return false;
		}
		
		const direction = this.cell.figure.color === Colors.BLACK ? 1 : -1;
		const firstStepDirection = this.cell.figure.color === Colors.BLACK ? 2 : -2;
		
		for (let i = this.cell.x + direction; i !== target.x; i += direction) {
			if (i < 0 || i >= 8) {
				return false;
			}
			const cell = this.cell.board.getCell(i, target.y);
			if (!cell.isEmpty()) {
				return false
			}
		}
		
		if (
			(target.x === this.cell.x + direction
				|| (this.isFirstStep && target.x === this.cell.x + firstStepDirection))
			&& target.y === this.cell.y
			&& this.cell.board.getCell(target.x, target.y).isEmpty()
		) {
			return true;
		}
		
		return target.x === this.cell.x + direction
			&& (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
			&& this.cell.isEnemy(target);
	}
}