import NavComponent from "../NavComponent/NavComponent.jsx";
import searchLoop from '../../assets/images/searchLoop.svg';
import settings from '../../assets/images/settings.svg';
import styles from './Header.module.css'
import {Link} from "react-router-dom";


const Header = () => {
	return (
		<header className={styles.Header}>
			<div className='container-fluid'>
				<div className={styles.Header__wrapper}>
					<div className={styles.HeaderLeftWrapper}>
						<Link to='/'>
							<h1 className={styles.Logo}>
								ChessHub
							</h1>
						</Link>
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
						<Link to='/Login'>
							<span className={styles.Header__login}>Login</span>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;