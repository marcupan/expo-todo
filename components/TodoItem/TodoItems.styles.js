import { StyleSheet } from 'react-native';

import { MIN_GAP, SECONDARY_COLOR, TODO_ITEM_HEIGHT } from '../../const';

const wrapperSize = 2 * MIN_GAP;
const circleSize = 1.25 * MIN_GAP;

export const TodoItemStyles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: MIN_GAP,
		marginBottom: MIN_GAP,
		height: TODO_ITEM_HEIGHT,
		backgroundColor: SECONDARY_COLOR
	},
	radioWrapper: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		height: wrapperSize,
		width: wrapperSize,
		borderWidth: 1,
		borderRadius: wrapperSize
	},
	radioCircle: {
		position: 'absolute',
		width: circleSize,
		height: circleSize,
		borderRadius: circleSize,
		backgroundColor: 'black'
	}
});
