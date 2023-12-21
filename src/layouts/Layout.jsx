import React from 'react';
import Header from "../components/Header/Header.jsx";

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

export default Layout;