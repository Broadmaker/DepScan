import {
  CameraView,
  CameraType,
  useCameraPermissions,
} from "expo-camera";
import { useRef, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function CameraViewScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [facing, setFacing] = useState<CameraType>("back");

  const cameraRef = useRef<CameraView>(null);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-gray-100 px-4">
        <Text className="text-gray-800 text-center text-lg mb-6">
          Camera permission is required
        </Text>
        <Pressable
          className="bg-blue-600 px-6 py-3 rounded-full shadow-lg"
          onPress={requestPermission}
        >
          <Text className="text-white font-semibold text-base">Grant Permission</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo.uri);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  };

  const toggleFacing = () =>
    setFacing((prev) => (prev === "back" ? "front" : "back"));

// Frame dimensions
const frameMarginH = width * 0.1; // Adjusted for some more horizontal padding
const frameMarginV = height * 0.1; // Adjusting the vertical margin to move the frame up
const frameWidth = width - frameMarginH * 2;
const frameHeight = height * 0.7; // Make the frame 60% of screen height (can adjust more)
const cornerLength = 30;
const cornerThickness = 4;

  const renderCamera = () => (
    <View className="absolute inset-0">
      {/* Camera preview */}
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing={facing}
        mode="picture"
        mute={false}
      />

      {/* Dark overlay outside the frame */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      />

      {/* Frame cutout */}
      <View
        style={{
          position: "absolute",
          top: frameMarginV,
          left: frameMarginH,
          width: frameWidth,
          height: frameHeight,
        }}
      >
        {/* Corner brackets */}
        {["tl", "tr", "bl", "br"].map((pos) => {
          const styles: any = {
            tl: { top: 0, left: 0 },
            tr: { top: 0, right: 0 },
            bl: { bottom: 0, left: 0 },
            br: { bottom: 0, right: 0 },
          };
          return (
            <View key={pos} style={{ position: "absolute", ...styles[pos] }}>
              {/* Horizontal line */}
              <View
                style={{
                  width: cornerLength,
                  height: cornerThickness,
                  backgroundColor: "white",
                }}
              />
              {/* Vertical line */}
              <View
                style={{
                  width: cornerThickness,
                  height: cornerLength,
                  backgroundColor: "white",
                  position: "absolute",
                  ...(pos.includes("r") ? { right: 0 } : { left: 0 }),
                  ...(pos.includes("b") ? { bottom: 0 } : { top: 0 }),
                }}
              />
            </View>
          );
        })}
      </View>

      {/* Shutter + rotation buttons */}
     {/* Shutter + rotation buttons */}
<View className="absolute bottom-12 w-full flex-row items-center justify-center">
  {/* Shutter button (centered) */}
  <Pressable
    className="w-20 h-20 rounded-full bg-white justify-center items-center shadow-lg"
    onPress={takePhoto}
  >
    <View className="w-14 h-14 rounded-full bg-white" />
  </Pressable>

  {/* Rotate camera button (pushed right) */}
  <Pressable
    className="absolute right-10 w-14 h-14 rounded-full bg-gray-800 bg-opacity-70 justify-center items-center shadow-lg"
    onPress={toggleFacing}
  >
    <Ionicons name="camera-reverse-outline" size={26} color="white" />
  </Pressable>
</View>

    </View>
  );

  const renderPhoto = () => (
    <View className="flex-1 justify-center items-center bg-gray-100 px-4">
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          className="w-full h-3/4 rounded-2xl"
          resizeMode="contain"
        />
      )}
      <Pressable
        className="bg-blue-600 px-6 py-3 rounded-full mt-6 shadow-lg"
        onPress={() => setPhotoUri(null)}
      >
        <Text className="text-white font-semibold text-base">Retake</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {photoUri ? renderPhoto() : renderCamera()}
    </SafeAreaView>
  );
}
