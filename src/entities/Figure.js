import {FigureNames} from "../data/FigureNames.js";

export default class Figure {
  constructor(cell, color) {
    this.cell = cell;
		this.color = color;
		this.cell.figure = this;
		this.name = FigureNames.FIGURE
  }
}
