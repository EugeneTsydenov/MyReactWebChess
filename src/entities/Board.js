import {Cell} from "./Cell.js";
import {Colors} from "../data/Colors.js";
import {Pawn} from "./figures/Pawn.js";
import {Knight} from "./figures/Knight.js";
import {Bishop} from "./figures/Bishop.js";
import {Rook} from "./figures/Rook.js";
import {Queen} from "./figures/Queen.js";
import {King} from "./figures/King.js";

export class Board {
	cells = [];
	
	initCells() {
		for(let i = 0; i < 8; i++) {
			const row = [];
			for(let j = 0; j < 8; j++) {
				((i + j) % 2 === 0) ?
					row.push(new Cell(j, i, null, this, Colors.WHITE)) :
					row.push(new Cell(j, i, null, this, Colors.BLACK))
			}
			this.cells.push(row)
		}
	}
	
	getCell(x, y) {
		return this.cells[x][y]
	}
	
	highlightCell(targetCell) {
		for (let i = 0; i < 8; i++) {
			const row = this.cells[i];
			for (let j = 0; j < 8; j++) {
				const cell = row[j];
				cell.available = !!targetCell?.figure.canMove(cell)
			}
		}
	}
	
	getCopyBoard() {
		const newBoard = new Board();
		newBoard.cells = this.cells.map(row => [...row]);
		return newBoard;
	}
	
	addFigures() {
		this.addPawn();
		this.addKnight();
		this.addBishop();
		this.addRook();
		this.addQueen();
		this.addKing();
	}
	
	addPawn() {
		for(let i = 0; i < 8; i++) {
			new Pawn(this.getCell(6, i), Colors.WHITE);
			new Pawn(this.getCell(1, i), Colors.BLACK);
		}
	}
	
	addKnight() {
		new Knight(this.getCell(7, 1), Colors.WHITE);
		new Knight(this.getCell(7, 6), Colors.WHITE);
		new Knight(this.getCell(0, 1), Colors.BLACK);
		new Knight(this.getCell(0, 6), Colors.BLACK);
	}
	
	addBishop() {
		new Bishop(this.getCell(7, 2), Colors.WHITE);
		new Bishop(this.getCell(7, 5), Colors.WHITE);
		new Bishop(this.getCell(0, 2), Colors.BLACK);
		new Bishop(this.getCell(0, 5), Colors.BLACK);
	}
	
	addRook() {
		new Rook(this.getCell(7, 0), Colors.WHITE);
		new Rook(this.getCell(7, 7), Colors.WHITE);
		new Rook(this.getCell(0, 0), Colors.BLACK);
		new Rook(this.getCell(0, 7), Colors.BLACK);
	}
	
	addQueen() {
		new Queen(this.getCell(7, 4), Colors.WHITE);
		new Queen(this.getCell(0, 4), Colors.BLACK);
	}
	
	addKing() {
		new King(this.getCell(7, 3), Colors.WHITE);
		new King(this.getCell(0, 3), Colors.BLACK);
	}
}