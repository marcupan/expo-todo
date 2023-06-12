import React from 'react';

import { render, screen, fireEvent, within } from '@testing-library/react-native';

import { HomeScreen } from './Home';

describe('<Home />', () => {
	it('On add button press, add todo item with input text', () => {
		render(<HomeScreen />);

		const todoAdd = screen.getByTestId('todo-add');
		const todoInput = screen.getByTestId('todo-input');
		let todoItems = screen.queryAllByTestId('test-todo-item-root');

		expect(todoItems.length).toBe(0);

		fireEvent.changeText(todoInput, 'Todo 1');
		fireEvent.press(todoAdd);

		todoItems = screen.queryAllByTestId('test-todo-item-root');

		expect(todoItems.length).toBe(1);
		expect(within(todoItems[0]).getByText('Todo 1')).toBeTruthy();
	});
});
