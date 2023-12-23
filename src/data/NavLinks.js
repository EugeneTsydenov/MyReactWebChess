export const links = [
	{title: 'Play', associatedLinks: playLinks('Play')},
	{title: 'Tasks', associatedLinks: taskLinks('Tasks')},
	{title: 'Education', associatedLinks: educationLinks('Education')},
	{title: 'Viewing', associatedLinks: viewingLinks('Viewing')},
	{title: 'Community', associatedLinks: communityLinks('Community')},
	{title: 'Instruments', associatedLinks: instrumentLinks('Instruments')},
];

function playLinks(mainTitle) {
	return [
		{title: `${mainTitle} online`, path: `/${mainTitle}/Online`},
		{title: `${mainTitle} against bot`, path: `/${mainTitle}/Bot`},
		{title: `${mainTitle} against friend`, path: `/${mainTitle}/OnlineFriend`},
		{title: `${mainTitle} offline`, path: `/${mainTitle}/Offline`},
	]
}

function taskLinks(mainTitle) {
	return [
		{title: 'Create a task', path: `/${mainTitle}/#`},
		{title: 'Puzzle Streak', path: `/${mainTitle}/#`},
		{title: 'Puzzle Storm', path: `/${mainTitle}/#`},
		{title: 'Puzzle Racer', path: `/${mainTitle}/#`},
	]
}

function educationLinks(mainTitle) {
	return [
		{title: 'Chess basics', path: `/${mainTitle}/#`},
		{title: 'Practice', path: `/${mainTitle}/#`},
		{title: 'Coordinates', path: `/${mainTitle}/#`},
		{title: 'Studio', path: `/${mainTitle}/#`},
		{title: 'Trainers', path: `/${mainTitle}/#`},
	]
}

function viewingLinks(mainTitle) {
	return [
		{title: 'ChessHub TV', path: `/${mainTitle}/#`},
		{title: 'Current games', path: `/${mainTitle}/#`},
		{title: 'Streamers', path: `/${mainTitle}/#`},
		{title: 'Translations', path: `/${mainTitle}/#`},
		{title: 'Video library', path: `/${mainTitle}/#`},
	]
}

function communityLinks(mainTitle) {
	return [
		{title: 'Players', path: `/${mainTitle}/#`},
		{title: 'Clubs', path: `/${mainTitle}/#`},
		{title: 'Forum', path: `/${mainTitle}/#`},
		{title: 'Blog', path: `/${mainTitle}/#`},
	]
}

function instrumentLinks(mainTitle) {
	return [
		{title: 'Analyze the game', path: `/${mainTitle}/#`},
		{title: 'Debuts', path: `/${mainTitle}/#`},
		{title: 'Board editor', path: `/${mainTitle}/#`},
		{title: 'Import batch', path: `/${mainTitle}/#`},
		{title: 'Advanced search', path: `/${mainTitle}/#`},
	]
}