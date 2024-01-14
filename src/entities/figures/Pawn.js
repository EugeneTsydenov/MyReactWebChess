import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-pawn.svg';
import whiteFigure from '../../assets/images/white-pawn.svg';
import {FigureNames} from "../../data/FigureNames.js";

export class Pawn extends Figure {
	isFirstStep = true
	
	constructor(cell, color) {
		super(cell, color);
		this.isFirstStep = true;
		this.cell = cell;
		this.color = color;
		this.name = FigureNames.PAWN;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
	
	canMove(target) {
		if (!super.canMove(target)) return false;
		
		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
		const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;
		
		if(
			(
				target.y === this.cell.y + direction ||
				this.isFirstStep &&
				(target.y === this.cell.y + firstStepDirection)
			) &&
			target.x === this.cell.x &&
			this.cell.board.getCell(target.x ,target.y).isEmpty()
		) {
			return true
		}
		
		if(this.canEatFigure(target)) return true;
		
		return false;
	}
	
	canEatFigure(target) {
		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
		
		return (
			target.y === this.cell.y + direction &&
			(target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
			this.cell.isEnemy(target)
		);
	}
	
	promotePawn(newFigure) {
		newFigure.cell = this.cell;
		this.cell.figure = newFigure;
		this.name = newFigure.name;
		this.logo = newFigure.logo
	}
	
	moveFigure(cell) {
		super.moveFigure(cell);
		this.isFirstStep = false
	}
}