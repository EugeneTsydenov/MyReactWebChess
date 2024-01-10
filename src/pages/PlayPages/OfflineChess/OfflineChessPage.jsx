import Layout from "../../../layouts/Layout.jsx";
import React from "react";
import WrapperBoardComponent from "../../../components/ChessComponents/WrapperBoardComponent/WrapperBoardComponent.jsx";
import styles from './OfflineChessPage.module.css'

const OfflineChessPage = () => {
	
	return (
		<Layout>
			<main>
				<section className={styles.Section}>
					<div className='container'>
						<WrapperBoardComponent/>
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default OfflineChessPage;