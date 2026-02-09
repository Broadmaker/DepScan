// src/screens/Home/ClassDetailScreen.tsx
import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ClassStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ClassStackParamList, 'ClassDetail'>;

interface Student {
  id: string;
  name: string;
  grade: string;
}

// Dummy student data
const dummyStudents: Student[] = [
  { id: '1', name: 'Juan Dela Cruz', grade: 'Grade 7' },
  { id: '2', name: 'Maria Santos', grade: 'Grade 7' },
  { id: '3', name: 'Pedro Reyes', grade: 'Grade 7' },
  { id: '4', name: 'Ana Villanueva', grade: 'Grade 7' },
  { id: '5', name: 'Luis Garcia', grade: 'Grade 7' },
];

export default function ClassDetailScreen({ route, navigation }: Props) {
  const { classId } = route.params;

  // Normally you'd fetch class info using classId
  const classInfo = {
    title: 'Math 101',
    gradeLevel: 'Grade 7',
    instructor: 'Mr. Smith',
    description: 'Basic Algebra and Geometry',
  };

  const [students, setStudents] = useState(dummyStudents);

  const renderStudent = ({ item }: { item: Student }) => (
    <View className="bg-white p-4 rounded-xl shadow mb-3 flex-row justify-between items-center">
      <Text className="text-gray-800 font-medium">{item.name}</Text>
      <Text className="text-gray-500 text-sm">{item.grade}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">
     
      {/* Class Info */}
      <View className="bg-white p-4 rounded-xl shadow mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-xl font-bold text-gray-800">{classInfo.title}</Text>
          <Text className="text-sm font-semibold text-blue-500">{classInfo.gradeLevel}</Text>
        </View>
        <Text className="text-gray-600 mb-2">{classInfo.description}</Text>
        <Text className="text-gray-400 text-sm">Instructor: {classInfo.instructor}</Text>
      </View>

      {/* Students List Header */}
      <Text className="text-lg font-bold text-gray-800 mb-3">Students</Text>

      {/* Students List */}
      <FlatList
        data={students}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Floating Add Student Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full justify-center items-center shadow-lg"
        onPress={() => alert('Add Student functionality coming soon!')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
