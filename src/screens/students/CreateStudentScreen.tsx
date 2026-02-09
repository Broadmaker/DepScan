// src/screens/Home/CreateStudentScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<StudentStackParamList, 'CreateStudent'>;

const gradeLevels = ['Grade 7', 'Grade 8', 'Grade 9'];

export default function CreateStudentScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState(gradeLevels[0]);
  const [section, setSection] = useState('');

  const handleSave = () => {
    if (!name || !section) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', `Student "${name}" added to ${grade} - Section ${section}`);
    navigation.goBack();
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

      <Text className="text-2xl font-bold text-gray-800 mb-6">Add Student</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Name */}
        <Text className="text-gray-700 mb-1">Student Name</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="Enter student name"
          value={name}
          onChangeText={setName}
        />

        {/* Section */}
        <Text className="text-gray-700 mb-1">Section</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="Enter section (e.g., A)"
          value={section}
          onChangeText={setSection}
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
          <Text className="text-white text-center font-semibold">Save Student</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
