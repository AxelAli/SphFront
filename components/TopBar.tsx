import { View } from "react-native";
import { Input, useColorModeValue, useTheme } from "native-base";
import React from "react";

export default function TopBar({
  value,
  handleChange,
}: {
  value?: string;
  handleChange: (text: string) => void;
}) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: useColorModeValue(colors.gray[50], colors.gray[700]),
        padding: 12,
      }}
    >
      <Input
        size="xl"
        variant="filled"
        w="100%"
        type="text"
        value={value}
        keyboardType="numeric"
        onChangeText={handleChange}
        placeholder="Search user"
      />
    </View>
  );
}
