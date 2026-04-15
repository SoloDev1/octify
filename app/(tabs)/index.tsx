import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// This makes the third-party Safe Area View compatible with Tailwind classes
const StyledSafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <StyledSafeAreaView className="flex-1 bg-[#F2F2F2]">
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
        <Link href="/onboarding" className="mt-4 text-lg text-gray-500">
          Onboarding
        </Link>
      </View>
    </StyledSafeAreaView>
  );
}
