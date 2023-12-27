import React, {useEffect, useState} from 'react';
import styles from './BoardComponent.module.css';
import CellComponent from "../CellComponent/CellComponent.jsx";
import PropTypes from "prop-types";
const BoardComponent = ({board, setBoard}) => {
	const [selectedCell, setSelectedCell] = useState(null);
	function handleClickOnSelectedCell(cell) {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.moveFigure(cell);
			setSelectedCell(null);
			updateBoard();
		} else {
			if(cell.figure) {
				setSelectedCell(cell);
			}
		}
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
	setBoard: PropTypes.func.isRequired
}

export default BoardComponent;