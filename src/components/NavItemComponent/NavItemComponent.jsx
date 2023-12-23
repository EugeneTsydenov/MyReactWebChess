import React, {useState} from 'react';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import styles from './NavItemComponent.module.css'
import NavDropDownMenu from "../NavDropdownMenu/NavDropDownMenu.jsx";

const NavItemComponent = ({link}) => {
	const [isHovered, setHovered] = useState(false)
	const {title, associatedLinks} = link;
	
	function handleMouseEnter() {
		setHovered(true)
	}
	function handleMouseLeave() {
		setHovered(false)
	}
	
	return (
		<li
			className={isHovered ? styles.ItemHover : styles.Item}
			onMouseLeave={handleMouseLeave}
			onMouseEnter={handleMouseEnter}
		>
			<NavLink to={'/' + title}>
				<p className={styles.Text}>
					{title}
				</p>
			</NavLink>
			<NavDropDownMenu
				associatedLinks={associatedLinks}
				isHovered={isHovered}
			/>
		</li>
	);
};

NavItemComponent.propTypes = {
	link: PropTypes.object.isRequired,
}

export default NavItemComponent;