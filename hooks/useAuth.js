import { useContext } from 'react';

import * as LocalAuthentication from 'expo-local-authentication';

import { AuthContext } from '../context/auth';

export const useAuth = () => {
	const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

	const signIn = () => {
		LocalAuthentication.authenticateAsync({
			promptMessage: 'Authenticate',
			fallbackLabel: 'Enter Password'
		}).then((auth) => setIsAuthenticated(auth.success));
	};

	const signOut = () => setIsAuthenticated(false);

	return {
		isAuthenticated,
		signOut,
		signIn
	};
};
