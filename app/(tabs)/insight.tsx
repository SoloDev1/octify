import { styled } from "nativewind";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// This makes the third-party Safe Area View compatible with Tailwind classes
const StyledSafeAreaView = styled(RNSafeAreaView);

const insight = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-[#F2F2F2]">
      {/* Your screen content goes here */}
      <View>
        <Text>Insights Screen</Text>
      </View>
    </StyledSafeAreaView>
  );
};

export default insight;
