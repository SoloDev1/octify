import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/signup">{"Don't"} have an account? Sign up</Link>
    </View>
  );
};

export default SignIn;
