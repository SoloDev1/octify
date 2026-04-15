import { View, Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// This makes the third-party Safe Area View compatible with Tailwind classes
const StyledSafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-[#F2F2F2]">
      <View>
        <Text>settings</Text>
      </View>
    </StyledSafeAreaView>
  );
};

export default Settings;
