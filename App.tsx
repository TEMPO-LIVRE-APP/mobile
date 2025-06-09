import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import HomeStack from './src/navigation/HomeStack';
import RootNavigator from './src/navigation/RootNavigation';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#000000"/>
        <HomeStack />
      </SafeAreaView>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
