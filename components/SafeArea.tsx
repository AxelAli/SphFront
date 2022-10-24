import { useTheme, useColorModeValue } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

export default function SafeArea() {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: useColorModeValue(colors.gray[50], colors.gray[700]),
      }}
    />
  );
}
