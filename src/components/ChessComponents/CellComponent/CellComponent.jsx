import React from 'react';
import styles from './CellComponent.module.css'
import PropTypes from "prop-types";
import {Colors} from "../../../data/Colors.js";

const CellComponent = ({ cell, select, handleClickOnSelectedCell }) => {
	return (
		<div
			className={
				[
					cell.color === Colors.WHITE ? styles.CellWhite : styles.CellBlack,
					select && styles.SelectedCell,
					cell.available && cell.figure && styles.AvailableForAttack
				].join(' ')
			}
		>
			<button onClick={() => {
				handleClickOnSelectedCell(cell);
			}}>
				{
					cell.figure === null ?
					'' :
					<img className={styles.Figure} src={cell.figure.logo} alt={cell.figure.name}/>
				}
			</button>
			{
				cell.available &&
				!cell.figure &&
				<div className={styles.AvailableEmptyCell}></div>
			}
		</div>
	);
};


CellComponent.propTypes = {
	cell: PropTypes.object.isRequired,
	select: PropTypes.bool.isRequired,
	handleClickOnSelectedCell: PropTypes.func.isRequired
}

export default CellComponent;
