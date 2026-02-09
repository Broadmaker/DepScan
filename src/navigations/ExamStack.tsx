// src/navigation/HomeStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExamStackParamList } from '../types';

import { ExamScreen, CreateExamScreen, AnswerKeyScreen} from '../screens/exams/index'

const Stack = createNativeStackNavigator<ExamStackParamList>();

export default function ExamStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f8f8f8' },
        headerTintColor: '#333',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Exam" component={ExamScreen} options={{ title: 'Exam List' }} />
      <Stack.Screen name="CreateExam" component={CreateExamScreen} options={{ title: 'Create Exam' }} />
      <Stack.Screen name="AnswerKey" component={AnswerKeyScreen} options={{ title: 'Answer key' }} />
    </Stack.Navigator>
  );
}
