import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import {selectLibrary} from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const {expanded, library} = this.props;

		if(expanded) {
			return (
				<CardSection>
					<Text style={{flex: 1}}>{library.description}</Text>
				</CardSection>
			);
		}
	}

	render() {
		const {title, description, id} = this.props.library;
		const {titleStyle} = styles;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>

					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

function mapPropsToState(state, ownProps) {
	const {library} = ownProps;

	return {
		expanded: state.selectedLibraryId === library.id
	}
}

export default connect(mapPropsToState, {selectLibrary})(ListItem);