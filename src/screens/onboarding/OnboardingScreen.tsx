/** @jsxImportSource nativewind */
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen() {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        source={require('../../../assets/deped_logo.png')} // adjust path
        className="w-28 h-28 mb-6"
        resizeMode="contain"
      />
      <Text className="text-3xl font-extrabold text-gray-700 mb-2">
        DepScan
      </Text>
      <Text className="text-sm text-gray-500">
        Scan, Manage, and Track effortlessly
      </Text>
    </View>
  );
}
