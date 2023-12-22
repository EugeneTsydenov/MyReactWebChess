import React from 'react';
import styles from './NavComponents.module.css'

const NavComponent = () => {
	const links = ['Play', 'Community', 'Learn', 'Tasks']
	
	return (
		<nav>
			<ul className={styles.List}>
				{
					links.map((link, i) => {
						return (
							<li key={i}>
								<p className={styles.Text}>{link}</p>
							</li>
						)
					})
				}
			</ul>
		</nav>
	);
};

export default NavComponent;