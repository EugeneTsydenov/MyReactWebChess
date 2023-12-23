import React from 'react';
import styles from './NavComponents.module.css'
import NavItemComponent from "../NavItemComponent/NavItemComponent.jsx";

const NavComponent = () => {
	const links = ['Play', 'Tasks', 'Education', 'Viewing', 'Community', 'Instruments']
	
	return (
		<nav>
			<ul className={styles.List}>
				{
					links.map((link, i) => {
						return (
							<NavItemComponent link={link} key={i}/>
						)
					})
				}
			</ul>
		</nav>
	);
};

export default NavComponent;