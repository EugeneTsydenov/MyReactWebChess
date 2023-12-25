import Layout from "../../../layouts/Layout.jsx";
import BoardComponent from "../../../components/ChessComponents/BoardComponent/BoardComponent.jsx";

const OfflineChessPage = () => {
	return (
		<Layout>
			<main>
				<BoardComponent/>
			</main>
		</Layout>
	);
};

export default OfflineChessPage;