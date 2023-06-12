import { Text, TouchableOpacity, View } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import { ScreenHeaderStyles } from './ScreenHeader.styles';

export const ScreenHeader = ({ title }) => {
	const { isAuthenticated, signIn, signOut } = useAuth();

	return (
		<View style={ScreenHeaderStyles.container}>
			<Text style={ScreenHeaderStyles.title}>{title}</Text>

			{isAuthenticated ? (
				<TouchableOpacity onPress={signOut} style={ScreenHeaderStyles.button}>
					<Text>Logout</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={signIn} style={ScreenHeaderStyles.button}>
					<Text>Login</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};
