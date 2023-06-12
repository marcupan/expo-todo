import { createContext, useState } from 'react';

export const AuthContext = createContext({
	isAuthenticated: false,
	setIsAuthenticated: () => void 0
});

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated: (isAuthenticated) => setIsAuthenticated(isAuthenticated)
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
