import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScannerStackParamList } from '../../types';
import { Ionicons } from '@expo/vector-icons';
import { Camera, CameraType, CameraCapturedPicture, useCameraPermissions } from 'expo-camera';

type Props = NativeStackScreenProps<ScannerStackParamList, 'CameraView'>;

export default function CameraViewScreen({ navigation }: Props) {
  const cameraRef = useRef<InstanceType<typeof Camera> | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <SafeAreaView className="flex-1 bg-black justify-center items-center">
        <Text className="text-white">Requesting camera permission...</Text>
      </SafeAreaView>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 bg-black justify-center items-center">
        <Text className="text-white mb-4">Camera permission denied</Text>
        <TouchableOpacity
          className="bg-blue-600 px-4 py-2 rounded"
          onPress={requestPermission}
        >
          <Text className="text-white">Grant Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo: CameraCapturedPicture = await cameraRef.current.takePictureAsync({
        quality: 0.8,
      });
      setPhotoUri(photo.uri);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      {!photoUri ? (
        <Camera ref={cameraRef} style={{ flex: 1 }} type={CameraType.back} ratio="4:3">
          {/* Overlay */}
          <View className="flex-1 justify-center items-center">
            <View className="border-2 border-white w-72 h-96 justify-center items-center rounded-lg">
              <Text className="text-white text-sm text-center opacity-80">
                Align answer sheet here
              </Text>
            </View>
          </View>

          {/* Controls */}
          <View className="absolute bottom-8 left-0 right-0 flex-row justify-around items-center px-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={32} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white w-16 h-16 rounded-full justify-center items-center"
              onPress={takePicture}
            >
              <Ionicons name="camera" size={28} color="black" />
            </TouchableOpacity>

            <View className="w-8" />
          </View>
        </Camera>
      ) : (
        <View className="flex-1 bg-black">
          <Image source={{ uri: photoUri }} className="flex-1" resizeMode="contain" />

          <View className="flex-row justify-around items-center p-6 bg-black">
            <TouchableOpacity
              className="bg-white px-6 py-2 rounded-lg"
              onPress={() => setPhotoUri(null)}
            >
              <Text>Retake</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-blue-600 px-6 py-2 rounded-lg"
              onPress={() => navigation.navigate('ReviewScan', { uri: photoUri })}
            >
              <Text className="text-white">Use Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
