import HomePage from "../pages/HomePage.jsx";
import OnlineChessPage from "../pages/OnlineChessPage.jsx";
import BotChessPage from "../pages/BotChessPage.jsx";
import FriendChessPage from "../pages/FriendChessPage.jsx";
import OfflineChessPage from "../pages/OfflineChessPage.jsx";

export const privateRoutes = [
	{path: '/OnlineFriend', component: FriendChessPage, exact: true},
	{path: '/', component: HomePage, exact: true},
	{path: '/Online', component: OnlineChessPage, exact: true},
	{path: '/OnlineBot', component: BotChessPage, exact: true},
	{path: '/Offline', component: OfflineChessPage, exact: true},
]

export const publicRoutes = [
	{path: '/', component: HomePage, exact: true},
	{path: '/Online', component: OnlineChessPage, exact: true},
	{path: '/OnlineBot', component: BotChessPage, exact: true},
	{path: '/Offline', component: OfflineChessPage, exact: true},
]