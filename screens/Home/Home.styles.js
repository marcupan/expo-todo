import { StyleSheet } from 'react-native';
import {
	MAX_TODO_ITEMS,
	MIN_GAP,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
	TODO_ITEM_HEIGHT
} from '../../const';

const buttonHeight = 4 * MIN_GAP;

export const HomeStyles = StyleSheet.create({
	container: {
		flex: 1
	},
	inputWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: MIN_GAP
	},
	input: {
		flex: 1,
		marginRight: MIN_GAP,
		paddingHorizontal: MIN_GAP,
		borderWidth: 1
	},
	primaryButton: {
		padding: MIN_GAP,
		backgroundColor: PRIMARY_COLOR
	},
	secondaryButton: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		height: buttonHeight,
		backgroundColor: SECONDARY_COLOR
	},
	dividerWrapper: {
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		height: buttonHeight
	},
	divider: {
		width: '100%',
		height: 1,
		backgroundColor: SECONDARY_COLOR
	},
	listWrapper: {
		height: MAX_TODO_ITEMS * (TODO_ITEM_HEIGHT + MIN_GAP) + MIN_GAP
	}
});
