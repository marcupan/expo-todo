import React from 'react';

import { render, screen } from '@testing-library/react-native';

import { mockUseAuth } from '../mocks/useAuth.mock';

import Index from './index';

describe('<App />', () => {
	beforeEach(() => {
		mockUseAuth.mockReset(); // Reset the mock before each test case
	});

	it('If isAuthenticated renders Home screen', () => {
		mockUseAuth.mockReturnValue({ isAuthenticated: true });

		render(<Index />);

		const homeRoot = screen.getByTestId('test-home-root');

		expect(homeRoot).toBeTruthy();
	});

	it('If isAuthenticated renders Home screen', () => {
		mockUseAuth.mockReturnValue({ isAuthenticated: false });

		render(<Index />);

		const authRoot = screen.getByTestId('test-auth-root');

		expect(authRoot).toBeTruthy();
	});
});
