import Figure from "../Figure.js";
import {Colors} from "../../data/Colors.js";
import blackFigure from '../../assets/images/black-king.svg';
import whiteFigure from '../../assets/images/white-king.svg';

export class King extends Figure {
	constructor(cell, color) {
		super(cell, color);
		this.cell = cell;
		this.color = color;
		this.logo = this.color === Colors.BLACK ? blackFigure : whiteFigure;
	}
}