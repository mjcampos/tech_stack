export default (state = null, action) => {
	switch(action.type) {
		case "SELECT_LIBRARY":
			return action.libraryId;
		default:
			return state;
	}
}