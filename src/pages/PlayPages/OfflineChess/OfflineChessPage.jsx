import Layout from "../../../layouts/Layout.jsx";
import BoardComponent from "../../../components/ChessComponents/BoardComponent/BoardComponent.jsx";
import React, {useEffect, useState} from "react";
import {Board} from "../../../entities/Board.js";
import styles from "./OfflineChessPage.module.css";

const OfflineChessPage = () => {
	const [board, setBoard] = useState(new Board());
	
	useEffect(() => {
		restartGame()
	}, []);
	
	function restartGame() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
	}
	
	return (
		<Layout>
			<main>
				<section className={styles.Section}>
					<div className='container'>
						<div className={styles.Wrapper}>
							<BoardComponent board={board} setBoard={setBoard}/>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default OfflineChessPage;