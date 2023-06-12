import { useRef, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { MIN_GAP } from '../../const';

import { ScreenHeader } from '../../components/ScreenHeader/ScreenHeader';
import { TodoItem } from '../../components/TodoItem/TodoItem';

import { HomeStyles } from './Home.styles';

export const HomeScreen = () => {
	const listRef = useRef(null);

	const [hasDoneTodos, setHasDoneTodos] = useState(false);
	const [editableId, setEditableId] = useState('');
	const [todoText, setTodoText] = useState('');
	const [todos, setTodos] = useState([]);

	const hasEditable = editableId !== '';

	const handleAddTodo = () => {
		const newTodo = { id: `item-${todos.length}-${todoText}`, text: todoText, done: false };

		setTodos([newTodo, ...todos]);
		setTodoText('');

		setTimeout(() => {
			listRef.current?.scrollToIndex({
				index: 0,
				animated: true
			});
		}, 0);
	};
	const clearUpdate = () => {
		setEditableId('');
		setTodoText('');
	};
	const handleUpdateTodo = () => {
		const updatedTodos = todos.map((el) => (editableId === el.id ? { ...el, text: todoText } : el));

		setTodos([...updatedTodos]);

		clearUpdate();
	};
	const handleRemoveTodo = () => {
		const notDoneTodos = todos.filter((el) => !el.done);

		setTodos(notDoneTodos);
		setHasDoneTodos(false);

		clearUpdate();
	};
	const handleSubmitEditing = (ev) => setTodoText(ev.nativeEvent.text);
	const keyExtractFn = ({ id }) => id;

	const contentContainerStyle = { paddingTop: MIN_GAP };

	const renderActionButton = hasEditable ? (
		<TouchableOpacity style={HomeStyles.primaryButton} onPress={handleUpdateTodo}>
			<Text>Update</Text>
		</TouchableOpacity>
	) : (
		<TouchableOpacity testID="todo-add" style={HomeStyles.primaryButton} onPress={handleAddTodo}>
			<Text>Add</Text>
		</TouchableOpacity>
	);
	const renderRemoveButton = hasDoneTodos ? (
		<TouchableOpacity style={HomeStyles.secondaryButton} onPress={handleRemoveTodo}>
			<Text>Remove done todos</Text>
		</TouchableOpacity>
	) : (
		<View style={HomeStyles.dividerWrapper}>
			<View style={HomeStyles.divider} />
		</View>
	);
	const renderTodoItem = ({ item: { id, text, done } }) => {
		const handleTodoItemUpdate = () => {
			clearUpdate();

			if (editableId !== id) {
				setEditableId(id);
				setTodoText(text);
			}
		};
		const handleTodoItemPress = () => {
			const updatedTodos = todos.map((el) => (id === el.id ? { ...el, done: !done } : el));
			const hasDone = updatedTodos.some((el) => el.done);

			setHasDoneTodos(hasDone);
			setTodos([...updatedTodos]);

			clearUpdate();
		};

		return (
			<TodoItem
				text={text}
				isDone={done}
				isEditable={editableId === id}
				onPress={handleTodoItemUpdate}
				onDonePress={handleTodoItemPress}
			/>
		);
	};

	return (
		<View testID="test-home-root" style={HomeStyles.container}>
			<ScreenHeader title="Home" />

			<View style={HomeStyles.inputWrapper}>
				<TextInput
					testID="todo-input"
					value={todoText}
					style={HomeStyles.input}
					onChangeText={setTodoText}
					onSubmitEditing={handleSubmitEditing}
				/>

				{renderActionButton}
			</View>

			{renderRemoveButton}

			<View style={HomeStyles.listWrapper}>
				<FlatList
					ref={listRef}
					data={todos}
					contentContainerStyle={contentContainerStyle}
					keyExtractor={keyExtractFn}
					renderItem={renderTodoItem}
				/>
			</View>
		</View>
	);
};
