// src/screens/Home/CreateClassScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ClassStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ClassStackParamList, 'CreateClass'>;

const gradeLevels = ['Grade 7', 'Grade 8', 'Grade 9'];

export default function CreateClassScreen({ navigation }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [grade, setGrade] = useState(gradeLevels[0]);

  const handleSave = () => {
    if (!title || !description || !instructor) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    // Here you would normally save the class (API or state)
    Alert.alert('Success', `Class "${title}" created for ${grade}`);
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">
     
      <Text className="text-2xl font-bold text-gray-800 mb-6">Create Class</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Class Title */}
        <Text className="text-gray-700 mb-1">Class Title</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="Enter class title"
          value={title}
          onChangeText={setTitle}
        />

        {/* Description */}
        <Text className="text-gray-700 mb-1">Description</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={3}
        />

        {/* Instructor */}
        <Text className="text-gray-700 mb-1">Instructor</Text>
        <TextInput
          className="bg-white rounded-lg p-3 mb-4 border border-gray-300"
          placeholder="Enter instructor name"
          value={instructor}
          onChangeText={setInstructor}
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
          <Text className="text-white text-center font-semibold">Save Class</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
