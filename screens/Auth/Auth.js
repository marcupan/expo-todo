import { StyleSheet, Text, View } from 'react-native';

import { ScreenHeader } from '../../components/ScreenHeader/ScreenHeader';

export const AuthScreen = () => (
	<View testID="test-auth-root" style={styles.root}>
		<ScreenHeader title="Login" />

		<View>
			<Text>Please login to View</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	root: {
		flex: 1
	}
});
