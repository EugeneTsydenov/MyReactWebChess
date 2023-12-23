import HomePage from "../pages/PlayPages/HomePage.jsx";
import OnlineChessPage from "../pages/PlayPages/OnlineChessPage.jsx";
import BotChessPage from "../pages/PlayPages/BotChessPage.jsx";
import FriendChessPage from "../pages/PlayPages/FriendChessPage.jsx";
import OfflineChessPage from "../pages/PlayPages/OfflineChessPage.jsx";
import PlayPage from '../pages/PlayPages/PlayPage.jsx'
import TaskPage from "../pages/TasksPages/TaskPage.jsx";
import EducationPage from "../pages/EducationPages/EducationPage.jsx";
import ViewingPage from "../pages/ViewingPages/ViewingPage.jsx";
import CommunityPage from "../pages/CommunityPages/CommunityPage.jsx";
import InstrumentsPage from "../pages/InstrumentsPages/InstrumentsPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

export const privateRoutes = [
	{path: '/Play/:OnlineFriend', component: FriendChessPage, exact: true},
	{path: '/', component: HomePage, exact: true},
	{path: '/Play/:Online', component: OnlineChessPage, exact: true},
	{path: '/Play/:Bot', component: BotChessPage, exact: true},
	{path: '/Play/:Offline', component: OfflineChessPage, exact: true},
	{path: '/Play', component: PlayPage, exact: true},
	{path: '/Tasks', component: TaskPage, exact: true},
	{path: '/Education', component: EducationPage, exact: true},
	{path: '/Viewing', component: ViewingPage, exact: true},
	{path: '/Community', component: CommunityPage, exact: true},
	{path: '/Instruments', component: InstrumentsPage, exact: true},
]

export const publicRoutes = [
	{path: '/Tasks', component: TaskPage, exact: true},
	{path: '/', component: HomePage, exact: true},
	{path: '/Play/:Online', component: OnlineChessPage, exact: true},
	{path: '/Play/:Bot', component: BotChessPage, exact: true},
	{path: '/Play/:Offline', component: OfflineChessPage, exact: true},
	{path: '/Play', component: PlayPage, exact: true},
	{path: '/Education', component: EducationPage, exact: true},
	{path: '/Viewing', component: ViewingPage, exact: true},
	{path: '/Community', component: CommunityPage, exact: true},
	{path: '/Instruments', component: InstrumentsPage, exact: true},
	{path: '/Login', component: LoginPage, exact: true}
]