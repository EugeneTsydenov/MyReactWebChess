import React from 'react';
import PropTypes from "prop-types";
import styles from './WhiteLostFigures.module.css'

const WhiteLostFigures = ({board}) => {
	const arrOfLostFigures = [...board.lostWhiteFigures]
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

WhiteLostFigures.propTypes = {
	board: PropTypes.object.isRequired
}

export default WhiteLostFigures;