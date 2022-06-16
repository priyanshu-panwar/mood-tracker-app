import React from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../App.provider";

export const Analytics: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      <Text>Analy</Text>
    </View>
  );
};
