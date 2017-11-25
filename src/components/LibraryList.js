import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class LibraryList extends Component {
	render() {
		return (
			<View>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, null)(LibraryList);