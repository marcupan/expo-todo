import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { AuthProvider } from './context/auth';

import Home from './screens/index';

export default function App() {
	return (
		<AuthProvider>
			<SafeAreaView style={styles.container}>
				<Home />
			</SafeAreaView>
		</AuthProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	}
});
