import React from 'react';
import styles from './NavComponents.module.css'
import NavItemComponent from "../NavItemComponent/NavItemComponent.jsx";
import {links} from "../../data/NavLinks.js";

const NavComponent = () => {
	return (
		<nav>
			<ul className={styles.List}>
				{
					links.map((link, i) => {
						return (
							<NavItemComponent
								link={link}
								key={i}
							/>
						)
					})
				}
			</ul>
		</nav>
	);
};

export default NavComponent;