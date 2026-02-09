// src/screens/Home/CreateExamScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ExamStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ExamStackParamList, 'CreateExam'>;

const gradeLevels = ['Grade 7', 'Grade 8', 'Grade 9'];

export default function CreateExamScreen({ navigation }: Props) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState(gradeLevels[0]);
  const [date, setDate] = useState('');

  const handleSave = () => {
    if (!title || !subject || !date) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', `Exam "${title}" created for ${grade}`);
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">

      <Text className="text-2xl font-bold text-gray-800 mb-6">Create Exam</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Exam Title */}
        <Text className="text-gray-700 mb-1">Exam Title</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="Enter exam title"
          value={title}
          onChangeText={setTitle}
        />

        {/* Subject */}
        <Text className="text-gray-700 mb-1">Subject</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="Enter subject"
          value={subject}
          onChangeText={setSubject}
        />

        {/* Date */}
        <Text className="text-gray-700 mb-1">Date</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="YYYY-MM-DD"
          value={date}
          onChangeText={setDate}
        />

        {/* Grade Level */}
        <Text className="text-gray-700 mb-1">Grade Level</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          {gradeLevels.map((g) => (
            <TouchableOpacity
              key={g}
              className={`mr-2 px-4 rounded-full border justify-center ${grade === g ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'}`}
              style={{ height: 32 }}
              onPress={() => setGrade(g)}
            >
              <Text className={`text-sm font-medium text-center ${grade === g ? 'text-white' : 'text-gray-700'}`}>
                {g}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Save Button */}
        <TouchableOpacity
          className="bg-green-500 py-3 rounded-lg shadow mb-8"
          onPress={handleSave}
        >
          <Text className="text-white text-center font-semibold">Save Exam</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
