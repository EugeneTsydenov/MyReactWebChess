import React from 'react';
import Header from "../components/Header/Header.jsx";
import PropTypes from "prop-types";

const Layout = ({children}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout;