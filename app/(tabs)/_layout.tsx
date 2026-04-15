import { Tabs } from "expo-router";
import { View, Image, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { clsx } from "clsx";
import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";

const tabBar = components.tabBar;

// 1. REFINED TabIcon FOR LIGHT MODE
const TabIcon = ({ focused, icon }: TabIconProps) => (
  <View className="tabs-icon">
    <View className={clsx("tabs-pill", focused && "tabs-active")}>
      <Image source={icon} resizeMode="contain" className="tabs-glyph" />
    </View>
  </View>
);

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          // LIGHT MODE COLORS
          backgroundColor: colors.primary, // Pure white or very light gray (#F8FAFC)
          borderTopWidth: 0,

          // RESPONSIVE SIZING
          // We use insets.bottom to ensure it clears home indicators on iPhone 15/16
          // while adding extra padding on devices with buttons (like SE or older Androids)
          height: tabBar.height, // Base height + safe area padding
          borderRadius: tabBar.radius,
          marginHorizontal: tabBar.horizontalInset, // Responsive side margins

          // DYNAMIC POSITIONING
          // Centers the bar and keeps it "floating" safely above the system UI
          bottom: Math.max(insets.bottom, tabBar.horizontalInset), // Ensures it doesn't get too close to the bottom ed
          elevation: 0, // Android shadow
        },

        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6, // Centers the icon within the tab bar
        },

        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
