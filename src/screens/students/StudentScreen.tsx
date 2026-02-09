// src/screens/StudentScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, ScrollView, View} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<StudentStackParamList, 'Student'>;

interface Student {
  id: string;
  name: string;
  grade: string;
  section: string;
}

const dummyStudents: Student[] = [
  { id: '1', name: 'Juan Dela Cruz', grade: 'Grade 7', section: 'A' },
  { id: '2', name: 'Maria Santos', grade: 'Grade 7', section: 'B' },
  { id: '3', name: 'Pedro Reyes', grade: 'Grade 8', section: 'A' },
  { id: '4', name: 'Ana Villanueva', grade: 'Grade 8', section: 'B' },
  { id: '5', name: 'Luis Garcia', grade: 'Grade 9', section: 'A' },
];

const gradeLevels = ['All', 'Grade 7', 'Grade 8', 'Grade 9'];

export default function StudentScreen({ navigation }: Props) {
  const [selectedGrade, setSelectedGrade] = useState('All');

  const filteredStudents =
    selectedGrade === 'All'
      ? dummyStudents
      : dummyStudents.filter((s) => s.grade === selectedGrade);

  const renderItem = ({ item }: { item: Student }) => (
    <View className="bg-white p-4 rounded-xl shadow mb-3 flex-row justify-between items-center">
      <View>
        <Text className="text-gray-800 font-medium">{item.name}</Text>
        <Text className="text-gray-500 text-sm">{item.grade} - Section {item.section}</Text>
      </View>
      <TouchableOpacity
        className="bg-blue-500 py-1 px-3 rounded-lg"
        onPress={() => navigation.navigate('StudentDetail', { studentId: item.id })}
      >
        <Text className="text-white font-semibold text-sm">View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">

      <Text className="text-2xl font-bold text-gray-800 mb-4">Students List (NAT)</Text>

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

      {/* Student List */}
      <FlatList
        data={filteredStudents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Add Student Button */}
      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full justify-center items-center shadow-lg"
        onPress={() => navigation.navigate('CreateStudent')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
