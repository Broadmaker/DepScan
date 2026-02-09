// src/navigation/HomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClassStackParamList } from '../types';

import { ClassDetailScreen, ClassListScreen, CreateClassScreen } from  '@/screens/classes';

const Stack = createNativeStackNavigator<ClassStackParamList>();

export default function ClassStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f8f8f8' },
        headerTintColor: '#333',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Class" component={ClassListScreen} options={{ title: 'Class List' }} />
      <Stack.Screen name="ClassDetail" component={ClassDetailScreen} options={{ title: 'Class Details' }} />
      <Stack.Screen name="CreateClass" component={CreateClassScreen} options={{ title: 'Create Class' }} />
    </Stack.Navigator>
  );
}
