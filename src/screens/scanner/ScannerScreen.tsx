// src/screens/Scanner/ScannerScreen.tsx
import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScannerStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<ScannerStackParamList, 'Scanner'>;

export default function ScannerScreen({ navigation }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 px-4 pt-6">
      {/* Title */}
      <Text className="text-2xl font-bold text-gray-800 mb-2">
        Answer Sheet Scanner
      </Text>
      <Text className="text-gray-600 mb-6">
        Scan NAT answer sheets using your device camera.
      </Text>

      {/* Instructions Card */}
      <View className="bg-white p-4 rounded-xl shadow mb-6">
        <Text className="text-lg font-semibold text-gray-800 mb-2">
          Instructions
        </Text>
        <Text className="text-gray-600 mb-1">• Place the answer sheet on a flat surface</Text>
        <Text className="text-gray-600 mb-1">• Ensure good lighting</Text>
        <Text className="text-gray-600 mb-1">• Align the sheet within the frame</Text>
      </View>

      {/* Start Scan Button */}
      <TouchableOpacity
        className="bg-blue-600 py-4 rounded-xl flex-row justify-center items-center shadow"
        onPress={() => navigation.navigate('CameraView')}
      >
        <Ionicons name="camera" size={22} color="white" />
        <Text className="text-white font-semibold text-lg ml-2">
          Start Scanning
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
