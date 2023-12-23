import React from 'react';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import styles from './NavItemComponent.module.css'

const NavItemComponent = ({link}) => {
	return (
		<li>
			<NavLink to={'/' + link}>
				<p className={styles.Text}>
					{link}
				</p>
			</NavLink>
		</li>
	);
};

NavItemComponent.propTypes = {
	link: PropTypes.string.isRequired,
}

export default NavItemComponent;