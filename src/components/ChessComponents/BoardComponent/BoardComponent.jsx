import React, {useEffect, useState} from 'react';
import styles from './BoardComponent.module.css'
import {Board} from "../../../entities/Board.js";
import CellComponent from "../CellComponent/CellComponent.jsx";
const BoardComponent = () => {
	const [board, setBoard] = useState(new Board());
	const [selectedCell, setSelectedCell] = useState(null);
	
	
	useEffect(() => {
		restartGame()
	}, []);
	
	useEffect(() => {
		highlightCell()
	}, [selectedCell])
	
	function restartGame() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	}
	
	function highlightCell() {
		if(selectedCell) {
			board.highlightCell(selectedCell);
		}
		updateBoard()
	}
	
	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard)
	}
	
	function handleClickOnSelectedCell(cell) {
		if(cell.figure) {
			setSelectedCell(cell)
		}
	}
	
	
	
	return (
		<section className={styles.Section}>
			<div className='container'>
				<div className={styles.Wrapper}>
					<div className={[styles.Board, 'unselectable'].join(' ')}>
						{
							board.cells.map((row) => {
								return row.map((cell) => {
									return (
										<CellComponent
											key={cell.id}
											cell={cell}
											select={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
											handleClickOnSelectedCell={handleClickOnSelectedCell}
										/>
									)
								})
							})
						}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BoardComponent;