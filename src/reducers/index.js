import {combineReducers} from 'redux';
import libraries from './LibraryReducer';
import selectedLibraryId from './LibraryReducer';

export default combineReducers({
	libraries,
	selectedLibraryId
});