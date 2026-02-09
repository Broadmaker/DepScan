// src/screens/Home/AnswerKeyScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ExamStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ExamStackParamList, 'AnswerKey'>;

const QUESTIONS = Array.from({ length: 10 }, (_, i) => i + 1);
const CHOICES = ['A', 'B', 'C', 'D', 'E'];

export default function AnswerKeyScreen({ navigation }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const selectAnswer = (question: number, choice: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: choice,
    }));
  };

  const handleSave = () => {
    // For now, just show the selected answers
    Alert.alert(
      'Answer Key Saved',
      JSON.stringify(answers, null, 2)
    );
    // Later: save to database / backend
  };

  const renderItem = ({ item }: { item: number }) => (
    <View className="bg-white p-4 rounded-xl shadow mb-3">
      <Text className="text-gray-800 font-semibold mb-3">
        Question {item}
      </Text>

      <View className="flex-row flex-wrap">
        {CHOICES.map((choice) => {
          const selected = answers[item] === choice;

          return (
            <TouchableOpacity
              key={choice}
              className={`mr-3 mb-3 w-12 h-12 rounded-full border justify-center items-center ${
                selected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
              }`}
              onPress={() => selectAnswer(item, choice)}
            >
              <Text
                className={`font-bold text-lg ${
                  selected ? 'text-white' : 'text-gray-700'
                }`}
              >
                {choice}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">

      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Answer Key
      </Text>

      {/* Questions */}
      <FlatList
        data={QUESTIONS}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Save Button */}
      <TouchableOpacity
        className="absolute bottom-6 left-4 right-4 bg-green-600 py-4 rounded-xl shadow-lg"
        onPress={handleSave}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Save Answer Key
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
