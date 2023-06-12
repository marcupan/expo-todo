export const mockUseAuth = jest.fn();

jest.mock('../hooks/useAuth', () => ({
	useAuth: mockUseAuth
}));
