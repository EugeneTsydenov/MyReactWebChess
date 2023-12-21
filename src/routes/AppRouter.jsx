import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes.js";

const AppRouter = () => {
	const isAuthorized = false;
	
	return (
		<Router>
			<Routes>
				{
					isAuthorized ?
						privateRoutes.map(route =>
							<Route
								path={route.path}
								element={<route.component/>}
								key={route.path}
							/>
						) :
						publicRoutes.map(route =>
							<Route
								path={route.path}
								element={<route.component/>}
								key={route.path}
							/>
						)
				}
			</Routes>
		</Router>
	);
};

export default AppRouter;