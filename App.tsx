import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/navigations'

export default function App() {
  return (
    <SafeAreaProvider>
     
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        <StatusBar style="dark" translucent={false} />

    </SafeAreaProvider>
  );
}
