import BoardComponent from "../../../components/ChessComponents/BoardComponent/BoardComponent.jsx";
import React, {useEffect, useState} from "react";
import {Board} from "../../../entities/Board.js";
import styles from "./WrapperBoardComponent.module.css";
import Player from "../../../entities/Player.js";
import {Colors} from "../../../data/Colors.js";

const WrapperBoardComponent = () => {
	const [board, setBoard] = useState(new Board());
	const [currentPlayer, setCurrentPlayer] = useState(null);
	
	useEffect(() => {
		restartGame()
		setCurrentPlayer(new Player(Colors.WHITE))
	}, []);
	
	function restartGame() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	}
	function swapPlayer() {
		if(currentPlayer?.color === Colors.WHITE) {
			setCurrentPlayer(new Player(Colors.BLACK));
		}
		if(currentPlayer?.color === Colors.BLACK) {
			setCurrentPlayer(new Player(Colors.WHITE))
		}
	}
	
	
	return (
		<main>
			<section className={styles.Section}>
				<div className='container'>
					<div className={styles.Wrapper}>
						<BoardComponent
							board={board}
							setBoard={setBoard}
							currentPlayer={currentPlayer}
							swapPlayer={swapPlayer}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default WrapperBoardComponent;