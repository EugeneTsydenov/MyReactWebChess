import React from 'react';
import PropTypes from "prop-types";
import styles from './BlackLostFigures.module.css'

const BlackLostFigures = ({board}) => {
	const arrOfLostFigures = [...board.lostBlackFigures]
	return (
		<ul className={styles.List}>
			{
				arrOfLostFigures.map((lostWhiteFigure, index) => {
					return (
						<li className={styles.Item} key={index}>
							<img className={styles.Img} src={lostWhiteFigure[0]} alt=""/>
							<div className={styles.Wrapper}>
								<span className={styles.X}>
									x
								</span>
								<span className={styles.Num}>
									{lostWhiteFigure[1]}
								</span>
							</div>
						</li>
					)
				})
			}
		</ul>
	);
};

BlackLostFigures.propTypes = {
	board: PropTypes.object.isRequired
}

export default BlackLostFigures;