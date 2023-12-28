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
	
	isEmptyVertical(target) {
		if(this.x !== target.x) return false;
		
		const min = Math.min(this.y, target.y);
		const max = Math.max(this.y, target.y);
		
		for(let y = min + 1; y < max; y++) {
			if(!this.board.getCell(this.x, y).isEmpty()) {
				return false;
			}
		}
		
		return true
	}
	
	isEmptyHorizontal(target) {
		if(this.y !== target.y) return false
		
		const min = Math.min(this.x, target.x);
		const max = Math.max(this.x, target.x);
		
		for (let x = min + 1 ; x < max; x++) {
			if(!this.board.getCell(x, this.y).isEmpty()) {
				return false;
			}
		}
		
		return true
	}
	
	isEmptyDiagonal(target) {
		const absX = Math.abs(target.x - this.x);
		const absY = Math.abs(target.y - this.y);
		
		if(absY !== absX) return false;
		
		const dy = this.y < target.y ? 1 : - 1;
		const dx = this.x < target.x ? 1 : - 1;
		
		for (let i = 1; i < absY; i++) {
			if(!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
				return false;
			}
		}
		
		return true
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
