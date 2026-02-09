// src/screens/Home/ExamListScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, ScrollView, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ExamStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ExamStackParamList, 'Exam'>;

interface Exam {
  id: string;
  title: string;
  subject: string;
  gradeLevel: string;
  date: string;
}

const dummyExams: Exam[] = [
  { id: '1', title: 'Math NAT Exam', subject: 'Math', gradeLevel: 'Grade 7', date: '2026-03-15' },
  { id: '2', title: 'Science NAT Exam', subject: 'Science', gradeLevel: 'Grade 8', date: '2026-03-16' },
  { id: '3', title: 'English NAT Exam', subject: 'English', gradeLevel: 'Grade 7', date: '2026-03-17' },
  { id: '4', title: 'Filipino NAT Exam', subject: 'Filipino', gradeLevel: 'Grade 9', date: '2026-03-18' },
  { id: '5', title: 'History NAT Exam', subject: 'History', gradeLevel: 'Grade 8', date: '2026-03-19' },
];

const gradeLevels = ['All', 'Grade 7', 'Grade 8', 'Grade 9'];

export default function ExamScreen({ navigation }: Props) {
  const [selectedGrade, setSelectedGrade] = useState('All');

  const filteredExams =
    selectedGrade === 'All'
      ? dummyExams
      : dummyExams.filter((e) => e.gradeLevel === selectedGrade);

  const renderItem = ({ item }: { item: Exam }) => (
    <View className="bg-white p-4 rounded-xl shadow mb-3">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold text-gray-800">{item.title}</Text>
        <Text className="text-sm font-semibold text-blue-500">{item.gradeLevel}</Text>
      </View>
      <Text className="text-gray-600 mb-1">Subject: {item.subject}</Text>
      <Text className="text-gray-500 text-sm mb-2">Date: {item.date}</Text>
      <TouchableOpacity
        className="bg-blue-500 py-2 rounded-lg shadow"
        onPress={() => navigation.navigate('AnswerKey',  { examId: item.id })}
      >
        <Text className="text-white text-center font-semibold">View Answer Key</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">
      
      <Text className="text-2xl font-bold text-gray-800 mb-4">Exams List (NAT)</Text>

      {/* Grade Filter */}
      <View className="mb-4 h-12">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 4 }}
        >
          {gradeLevels.map((g) => (
            <TouchableOpacity
              key={g}
              className={`mr-2 px-4 rounded-full border justify-center ${
                selectedGrade === g
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300'
              }`}
              style={{ height: 32 }}
              onPress={() => setSelectedGrade(g)}
            >
              <Text
                className={`text-sm font-medium text-center ${
                  selectedGrade === g ? 'text-white' : 'text-gray-700'
                }`}
              >
                {g}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Exams List */}
      <FlatList
        data={filteredExams}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Add Exam Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full justify-center items-center shadow-lg"
        onPress={() => navigation.navigate('CreateExam')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
