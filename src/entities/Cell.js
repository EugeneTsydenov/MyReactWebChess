import { v4 as uuidv4 } from 'uuid';

export class Cell {
  constructor(x, y, figure, board, color) {
    this.x = x;
		this.y = y;
		this.figure = figure;
		this.board = board;
		this.color = color;
		this.available = false;
		this.id = uuidv4()
  }
	
	isEmpty() {
		return this.figure === null;
	}
	
	isEnemy(target) {
		if(target.figure) {
			return this?.figure?.color !== target?.figure?.color
		}
		return false
	}
	
	moveFigure(target) {
		if(this.figure && this.figure.canMove(target)) {
			this.figure?.moveFigure(target);
			target.setFigure(this.figure);
			this.figure = null;
		}
	}
	
	setFigure(figure) {
		this.figure = figure;
		this.figure.cell = this;
	}
}
