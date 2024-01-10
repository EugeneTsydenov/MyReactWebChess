import React, {useEffect, useState} from 'react';
import styles from './BoardComponent.module.css';
import CellComponent from "../CellComponent/CellComponent.jsx";
import PropTypes from "prop-types";
import movingSound from '../../../assets/sounds/movingSound.mp3'
const BoardComponent = ({board, setBoard, currentPlayer, swapPlayer}) => {
	const [selectedCell, setSelectedCell] = useState(null);
	function handleClickOnSelectedCell(cell) {
		if (cell.figure?.color === currentPlayer?.color) {
			setSelectedCell(cell);
		}
	}
	
	function handleClickOnCellToMove(cell) {
		selectedCell.moveFigure(cell);
		swapPlayer()
		setSelectedCell(null);
		playSoundMoving()
		updateBoard();
	}
	
	
	useEffect(() => {
		highlightCells()
	}, [selectedCell])
	
	function highlightCells() {
		board.highlightCells(selectedCell)
		updateBoard()
	}
	
	function updateBoard() {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	}
	
	function playSoundMoving() {
		const sound = new Audio(movingSound);
		sound.volume = 0.2;
		sound.play()
	}
	
	
	return (
		<div className={[styles.Board].join(" ")}>
			{board && (
				board.cells.map((row) => {
					return row.map((cell) => {
						return (
							<CellComponent
								key={cell.id}
								cell={cell}
								select={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
								handleClickOnSelectedCell={handleClickOnSelectedCell}
								selectedCell={selectedCell}
								handleClickOnCellToMove={handleClickOnCellToMove}
							/>
						)
					})
				})
			)}
		</div>
	);
	
};

BoardComponent.propTypes = {
	board: PropTypes.object.isRequired,
	setBoard: PropTypes.func.isRequired,
	swapPlayer: PropTypes.func.isRequired,
	currentPlayer: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.oneOf([null]),
	]),
}

export default BoardComponent;