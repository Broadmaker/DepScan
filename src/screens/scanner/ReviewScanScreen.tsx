// src/screens/Scanner/ReviewScanScreen.tsx
import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScannerStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ScannerStackParamList, 'ReviewScan'>;

const dummyResults = [
  { id: '1', question: '1', answer: 'A' },
  { id: '2', question: '2', answer: 'C' },
  { id: '3', question: '3', answer: 'B' },
  { id: '4', question: '4', answer: 'D' },
  { id: '5', question: '5', answer: 'A' },
];

export default function ReviewScanScreen({ navigation }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        Review Scan
      </Text>

      {/* Scanned Answers */}
      <FlatList
        data={dummyResults}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-xl shadow mb-3 flex-row justify-between">
            <Text className="text-gray-700 font-medium">
              Question {item.question}
            </Text>
            <Text className="text-blue-600 font-bold">
              {item.answer}
            </Text>
          </View>
        )}
      />

      {/* Actions */}
      <View className="mt-4">
        <TouchableOpacity
          className="bg-green-600 py-3 rounded-lg mb-3"
          onPress={() => alert('Scan saved successfully')}
        >
          <Text className="text-white text-center font-semibold">
            Confirm & Save
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-gray-400 py-3 rounded-lg"
          onPress={() => navigation.navigate('CameraView')}
        >
          <Text className="text-gray-700 text-center font-semibold">
            Rescan
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
