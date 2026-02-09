// src/screens/Home/StudentDetailScreen.tsx
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<StudentStackParamList, 'StudentDetail'>;

export default function StudentDetailScreen({ navigation }: Props) {
  // Normally, you'd fetch student info using route params
  const student = {
    name: 'Juan Dela Cruz',
    grade: 'Grade 7',
    section: 'A',
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">
      {/* Header */}
      <TouchableOpacity
        className="flex-row items-center mb-4"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="ml-2 text-black font-medium">Back</Text>
      </TouchableOpacity>

      <Text className="text-2xl font-bold text-gray-800 mb-6">Student Info</Text>

      <View className="bg-white p-4 rounded-xl shadow">
        <Text className="text-gray-800 text-lg font-semibold mb-2">{student.name}</Text>
        <Text className="text-gray-500 mb-1">Grade: {student.grade}</Text>
        <Text className="text-gray-500 mb-1">Section: {student.section}</Text>
      </View>
    </SafeAreaView>
  );
}
