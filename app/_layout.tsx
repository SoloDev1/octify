import { Stack, SplashScreen } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { useEffect } from "react";
import "@/global.css";

// Prevent the splash screen from auto-hiding before fonts/off load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "sans-serif": require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-serif-bold": require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-serif-ExtraBold": require("@/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-serif-SemiBold": require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-serif-Light": require("@/assets/fonts/PlusJakartaSans-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="onboarding" />
      </Stack>
    </SafeAreaProvider>
  );
}
