import {FigureNames} from "../data/FigureNames.js";

export default class Figure {
  constructor(cell, color) {
    this.cell = cell;
		this.color = color;
		if(cell) {
			this.cell.figure = this;
		}
		this.name = FigureNames.FIGURE
  }
	
	canMove(cell) {
		if(!cell || (cell.figure?.color === this.color)) return false;
		
		return true;
	}
	
	moveFigure(cell) {}
}
