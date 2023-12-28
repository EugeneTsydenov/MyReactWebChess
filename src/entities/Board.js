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
		return this.cells[y][x]
	}
	
	highlightCells(targetCell) {
		if(this.cells.length === 0) return false
		for (let i = 0; i < 8; i++) {
			const row = this.cells[i];
			for (let j = 0; j < 8; j++) {
				const cell = row[j];
				cell.available = !!targetCell?.figure?.canMove(cell);
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
			new Pawn(this.getCell(i, 6), Colors.WHITE);
			new Pawn(this.getCell(i, 1), Colors.BLACK);
		}
	}
	
	addKnight() {
		new Knight(this.getCell(1, 7), Colors.WHITE);
		new Knight(this.getCell(6, 7), Colors.WHITE);
		new Knight(this.getCell(1, 0), Colors.BLACK);
		new Knight(this.getCell(6, 0), Colors.BLACK);
	}
	
	addBishop() {
		new Bishop(this.getCell(2, 7), Colors.WHITE);
		new Bishop(this.getCell(5, 7), Colors.WHITE);
		new Bishop(this.getCell(2, 0), Colors.BLACK);
		new Bishop(this.getCell(5, 0), Colors.BLACK);
	}
	
	addRook() {
		new Rook(this.getCell(0, 7), Colors.WHITE);
		new Rook(this.getCell(7, 7), Colors.WHITE);
		new Rook(this.getCell(0, 0), Colors.BLACK);
		new Rook(this.getCell(7, 0), Colors.BLACK);
	}
	
	addQueen() {
		new Queen(this.getCell(4, 7), Colors.WHITE);
		new Queen(this.getCell(4, 0), Colors.BLACK);
	}
	
	addKing() {
		new King(this.getCell(3, 7), Colors.WHITE);
		new King(this.getCell(3, 0), Colors.BLACK);
	}
}