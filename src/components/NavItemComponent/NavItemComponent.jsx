import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from './NavItemComponent.module.css'

const NavItemComponent = ({link}) => {
	return (
		<li>
			<Link to={'/' + link}>
				<p className={styles.Text}>
					{link}
				</p>
			</Link>
		</li>
	);
};

NavItemComponent.propTypes = {
	link: PropTypes.string.isRequired,
}

export default NavItemComponent;