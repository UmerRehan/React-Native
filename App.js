import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile  from './screens/Profile';
import Constants from 'expo-constants';
import CreateEmployee from './screens/CreateEmployee';

export default function App() {
  return (
    <View style={styles.container}>
      <CreateEmployee />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    marginTop:Constants.statusBarHeight,
  },
});
