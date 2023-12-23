import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from './NavDropDownMenu.module.css'

const NavDropDownMenu = ({associatedLinks, isHovered}) => {
	return (
		<ul className={isHovered ? styles.ListFlex : styles.ListNone}>
			{
				associatedLinks.map((link, index) => {
					return (
						<li
							key={link.path + index}
							className={styles.Item}
						>
							<Link to={link.path}>
								<span className={styles.Text}>
									{link.title}
								</span>
							</Link>
						</li>
					)
				})
			}
		</ul>
	);
};


NavDropDownMenu.propTypes = {
	associatedLinks: PropTypes.array.isRequired,
	isHovered: PropTypes.bool.isRequired
}
export default NavDropDownMenu;