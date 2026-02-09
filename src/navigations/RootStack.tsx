/** @jsxImportSource nativewind */
// src/navigation/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import TabNavigator from './TabNavigator';
import OnboardingScreen from '@/screens/onboarding/OnboardingScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
     {/*   <Stack.Screen name="DebugDatabase" component={DebugDatabaseScreen} /> */}
    </Stack.Navigator>
  );
}
