import { Text, TouchableOpacity, View } from 'react-native';

import { SECONDARY_COLOR } from '../../const';

import { TodoItemStyles } from './TodoItems.styles';

export const TodoItem = ({ text, isDone, isEditable, onPress, onDonePress }) => {
	const rootStyles = {
		...TodoItemStyles.root,
		backgroundColor: isEditable ? '#bbb' : SECONDARY_COLOR
	};
	const titleStyles = { textDecorationLine: isDone ? 'line-through' : undefined };

	return (
		<TouchableOpacity testID="test-todo-item-root" style={rootStyles} onPress={onPress}>
			<Text style={titleStyles}>{text}</Text>

			<TouchableOpacity style={TodoItemStyles.radioWrapper} onPress={onDonePress}>
				{isDone && <View style={TodoItemStyles.radioCircle} />}
			</TouchableOpacity>
		</TouchableOpacity>
	);
};
