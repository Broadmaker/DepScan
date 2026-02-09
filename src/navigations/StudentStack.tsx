// src/navigation/HomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../types';

import { StudentDetailScreen, StudentScreen, CreateStudentScreen} from '../screens/students/index'

const Stack = createNativeStackNavigator<StudentStackParamList>();

export default function StudentStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f8f8f8' },
        headerTintColor: '#333',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Student List' }} />
      <Stack.Screen name="StudentDetail" component={StudentDetailScreen} options={{ title: 'Student Details' }} />
      <Stack.Screen name="CreateStudent" component={CreateStudentScreen} options={{ title: 'Create Student' }} />
    </Stack.Navigator>
  );
}
