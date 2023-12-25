export class Cell {
  constructor(x, y, figure, board, color) {
    this.x = x;
		this.y = y;
		this.figure = figure;
		this.board = board;
		this.color = color;
		this.available = false;
  }
}
