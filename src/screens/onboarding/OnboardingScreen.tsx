/** @jsxImportSource nativewind */

import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  useEffect(() => {
    // Navigate to MainTabs after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
<View className="flex-1 justify-center items-center bg-white">
  {/* Splash logo */}
  <Image
    source={require('../../../assets/deped_logo.png')} // adjust path
    className="w-24 h-24 mb-4" // smaller size
    resizeMode="contain"
  />
  <Text className="text-xl font-bold text-gray-600">
   DepScan
  </Text>
</View>

  );
}
