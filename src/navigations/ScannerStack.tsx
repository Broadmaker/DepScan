// src/navigation/HomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScannerStackParamList, StudentStackParamList } from '../types';

import { ScannerScreen, CameraViewScreen, ReviewScannerSCreen} from '../screens/scanner/index'

const Stack = createNativeStackNavigator<ScannerStackParamList>();

export default function ScannerStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f8f8f8' },
        headerTintColor: '#333',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Scanner" component={ScannerScreen} options={{ title: 'Scanner' }} />
      <Stack.Screen name="CameraView" component={CameraViewScreen} options={{ title: 'Camera View' }} />
      <Stack.Screen name="ReviewScan" component={ReviewScannerSCreen} options={{ title: 'Review Scan' }} />
    </Stack.Navigator>
  );
}
