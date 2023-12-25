import React from 'react';
import styles from './CellComponent.module.css'
import PropTypes from "prop-types";
import {Colors} from "../../../data/Colors.js";

const CellComponent = ({ cell }) => {
	return (
		<div
			className={cell.color === Colors.WHITE ? styles.CellWhite : styles.CellBlack}
		>
			<button>
				{
					cell.figure === null ?
					'' :
					<img className={styles.Figure} src={cell.figure.logo} alt={cell.figure.name} />
				}
			</button>
		</div>
	);
};


CellComponent.propTypes = {
	cell: PropTypes.object.isRequired
}

export default CellComponent;
