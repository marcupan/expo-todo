import { StyleSheet } from 'react-native';

import { MIN_GAP } from '../../const';

export const ScreenHeaderStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 2 * MIN_GAP
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	button: {
		padding: MIN_GAP
	}
});
