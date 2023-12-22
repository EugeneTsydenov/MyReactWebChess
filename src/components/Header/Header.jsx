import React from 'react';
import NavComponent from "../NavComponent/NavComponent.jsx";
import searchLoop from '../../assets/images/searchLoop.svg';
import settings from '../../assets/images/settings.svg';
import styles from './Header.module.css'


const Header = () => {
	return (
		<header className={styles.Header}>
			<div className='container-fluid'>
				<div className={styles.Header__wrapper}>
					<div className={styles.HeaderLeftWrapper}>
						<h1 className={styles.Logo}>
							ChessHub
						</h1>
						<NavComponent/>
					</div>
					<div className={styles.HeaderRightWrapper}>
						<div className={styles.HeaderBtnWrapper}>
							<button>
								<img className={styles.Header__img} src={searchLoop} alt="SearchLoop"/>
							</button>
							<button>
								<img className={styles.Header__img} src={settings} alt="Settings"/>
							</button>
						</div>
						<button>
							<span className={styles.Header__login}>Login</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;