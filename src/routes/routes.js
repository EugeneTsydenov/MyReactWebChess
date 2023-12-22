import HomePage from "../pages/HomePage.jsx";
import OnlineChessPage from "../pages/OnlineChessPage.jsx";
import BotChessPage from "../pages/BotChessPage.jsx";
import FriendChessPage from "../pages/FriendChessPage.jsx";
import OfflineChessPage from "../pages/OfflineChessPage.jsx";
import PlayPage from '../pages/PlayPage.jsx'

export const privateRoutes = [
	{path: '/Play/:OnlineFriend', component: FriendChessPage, exact: true},
	{path: '/', component: HomePage, exact: true},
	{path: '/Play/:Online', component: OnlineChessPage, exact: true},
	{path: '/Play/:Bot', component: BotChessPage, exact: true},
	{path: '/Play/:Offline', component: OfflineChessPage, exact: true},
	{path: '/Play', component: PlayPage, exact: true}
]

export const publicRoutes = [
	{path: '/', component: HomePage, exact: true},
	{path: '/Play/:Online', component: OnlineChessPage, exact: true},
	{path: '/Play/:Bot', component: BotChessPage, exact: true},
	{path: '/Play/:Offline', component: OfflineChessPage, exact: true},
	{path: '/Play', component: PlayPage, exact: true}
]