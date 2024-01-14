import React from 'react';
import styles from './CellComponent.module.css'
import PropTypes from "prop-types";
import {Colors} from "../../../data/Colors.js";
import {Queen} from "../../../entities/figures/Queen.js";
import {Rook} from "../../../entities/figures/Rook.js";
import {Bishop} from "../../../entities/figures/Bishop.js";
import {Knight} from "../../../entities/figures/Knight.js";

const CellComponent = (
	{
		cell,
		select,
		handleClickOnSelectedCell,
		selectedCell,
		handleClickOnCellToMove,
		pawnEndOfBoard,
		changePawn
	}
) => {
	const newFigures = [
		new Queen(null, pawnEndOfBoard?.figure?.color),
		new Rook(null, pawnEndOfBoard?.figure?.color),
		new Bishop(null, pawnEndOfBoard?.figure?.color),
		new Knight(null, pawnEndOfBoard?.figure?.color),
	]
	
	return (
		<div
			className={
				[
					cell.color === Colors.WHITE ? styles.CellWhite : styles.CellBlack,
					select && styles.SelectedCell,
					cell.available && cell.figure && styles.AvailableForAttack,
					pawnEndOfBoard && pawnEndOfBoard !== cell && styles.Disable
				].join(' ')
			}
			onClick={() => {
				if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
					handleClickOnCellToMove(cell)
				} else {
					if(cell.figure) {
						handleClickOnSelectedCell(cell);
					}
				}
			}}
		>
			{
				cell.figure === null || pawnEndOfBoard === cell ?
					'' :
					<img className={styles.Figure} src={cell.figure.logo} alt={cell.figure.name}/>
			}
			{
				cell.available &&
				!cell.figure &&
				<div className={styles.AvailableEmptyCell}></div>
			}
			{
				pawnEndOfBoard && cell === pawnEndOfBoard &&
				<ul
					className={
						[
							styles.NewFiguresList,
							pawnEndOfBoard.figure.color === Colors.WHITE ? styles.NewFiguresListWhite : styles.NewFiguresListBlack
						].join(' ')
					}
				>
					{
						pawnEndOfBoard.figure.color === Colors.WHITE ?
							newFigures.map((newFigure, index) => {
								return (
									<li className={styles.NewFiguresItem} key={index}>
										<button onClick={(e) => {
											e.stopPropagation();
											changePawn(newFigure)
										}}>
											<img className={styles.Figure} src={newFigure.logo} alt={newFigure.name}/>
										</button>
									</li>
								)
							}) :
							newFigures.reverse().map((newFigure, index) => {
								return (
									<li
										className={styles.NewFiguresItem}
										key={index}
									>
										<button onClick={(e) => {
											e.stopPropagation();
											changePawn(newFigure)
										}}>
											<img className={styles.Figure} src={newFigure.logo} alt={newFigure.name}/>
										</button>
									</li>
								)
							})
					}
				</ul>
			}
		</div>
	);
};


CellComponent.propTypes = {
	cell: PropTypes.object.isRequired,
	select: PropTypes.bool.isRequired,
	handleClickOnSelectedCell: PropTypes.func.isRequired,
	selectedCell: PropTypes.any,
	handleClickOnCellToMove: PropTypes.func.isRequired,
	pawnEndOfBoard: PropTypes.any.isRequired,
	changePawn: PropTypes.func.isRequired,
};

export default CellComponent;