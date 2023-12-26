import Layout from "../../../layouts/Layout.jsx";
import BoardComponent from "../../../components/ChessComponents/BoardComponent/BoardComponent.jsx";
import {useEffect, useState} from "react";
import {Board} from "../../../entities/Board.js";

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
				<BoardComponent board={board} setBoard={setBoard}/>
			</main>
		</Layout>
	);
};

export default OfflineChessPage;