import { StyleSheet, View } from 'react-native';

import { useAuth } from '../hooks/useAuth';
import { MIN_GAP } from '../const';

import { AuthScreen } from './Auth/Auth';
import { HomeScreen } from './Home/Home';

export default function () {
	const { isAuthenticated } = useAuth();

	return <View style={styles.container}>{isAuthenticated ? <HomeScreen /> : <AuthScreen />}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 3 * MIN_GAP,
		paddingVertical: MIN_GAP
	}
});
