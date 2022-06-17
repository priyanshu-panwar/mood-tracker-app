import React from "react";
import { View, StyleSheet } from "react-native";

import { MoodPicker } from "../components/MoodPicker";
import { useAppContext } from "../App.provider";

export const Home: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectedMood={appContext.handleSelectedMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
