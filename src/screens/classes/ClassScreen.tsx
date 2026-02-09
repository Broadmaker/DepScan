// src/screens/Home/ClassScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ClassStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ClassStackParamList, 'Class'>;

interface ClassItem {
  id: string;
  title: string;
  description: string;
  instructor: string;
  gradeLevel: string; // DepEd/NAT grade level
}

const dummyData: ClassItem[] = [
  { id: '1', title: 'Math 101', description: 'Basic Algebra and Geometry', instructor: 'Mr. Smith', gradeLevel: 'Grade 7' },
  { id: '2', title: 'Science 201', description: 'Mechanics and Thermodynamics', instructor: 'Dr. Johnson', gradeLevel: 'Grade 8' },
  { id: '3', title: 'History 101', description: 'Philippine History Overview', instructor: 'Mrs. Brown', gradeLevel: 'Grade 7' },
  { id: '4', title: 'Chemistry 101', description: 'Introduction to Organic Chemistry', instructor: 'Dr. Lee', gradeLevel: 'Grade 8' },
  { id: '5', title: 'English 101', description: 'Literature and Composition', instructor: 'Ms. Davis', gradeLevel: 'Grade 9' },
];

const gradeLevels = ['All', 'Grade 7', 'Grade 8', 'Grade 9'];

export default function ClassScreen({ navigation }: Props) {
  const [selectedGrade, setSelectedGrade] = useState('All');

  // Filter classes based on selected grade
  const filteredData =
    selectedGrade === 'All'
      ? dummyData
      : dummyData.filter((item) => item.gradeLevel === selectedGrade);

  const renderItem = ({ item }: { item: ClassItem }) => (
    <View className="bg-white p-4 rounded-xl shadow-md mb-4">
      {/* Header: Class Title and Grade Level */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold text-gray-800">{item.title}</Text>
        <Text className="text-sm font-semibold text-blue-500">{item.gradeLevel}</Text>
      </View>

      {/* Description */}
      <Text className="text-gray-600 mb-2">{item.description}</Text>

      {/* Instructor */}
      <Text className="text-gray-400 text-sm mb-3">Instructor: {item.instructor}</Text>

      {/* View Details Button */}
      <TouchableOpacity
        className="bg-blue-500 py-2 rounded-lg shadow"
        onPress={() => navigation.navigate('ClassDetail', { classId: item.id })}
      >
        <Text className="text-white text-center font-semibold">View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">

      {/* Screen Title */}
      <Text className="text-2xl font-bold text-gray-800 mb-4">Class List (NAT)</Text>

      {/* Grade Filter */}
      <View className="mb-4 h-12">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 4 }}
        >
          {gradeLevels.map((grade) => (
            <TouchableOpacity
              key={grade}
              className={`mr-2 px-4 rounded-full border justify-center ${
                selectedGrade === grade
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300'
              }`}
              style={{ height: 32 }} // fixes vertical clipping
              onPress={() => setSelectedGrade(grade)}
            >
              <Text
                className={`text-sm font-medium text-center ${
                  selectedGrade === grade ? 'text-white' : 'text-gray-700'
                }`}
              >
                {grade}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Class List */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Add Class Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full justify-center items-center shadow-lg"
        onPress={() => navigation.navigate('CreateClass')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
