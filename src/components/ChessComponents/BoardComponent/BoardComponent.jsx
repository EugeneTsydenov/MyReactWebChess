import {useEffect, useState} from 'react';
import styles from './BoardComponent.module.css'
import {Board} from "../../../entities/Board.js";
import CellComponent from "../CellComponent/CellComponent.jsx";
const BoardComponent = () => {
	const [board, setBoard] = useState(new Board());
	
	useEffect(() => {
		restart()
	}, []);
	
	function restart() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	}
	
	return (
		<section className={styles.Section}>
			<div className='container'>
				<div className={styles.Wrapper}>
					<div className={styles.Board}>
						{
							board.cells.map((row) => {
								return row.map((cell, index) => {
									return (
										<CellComponent key={index} cell={cell}/>
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