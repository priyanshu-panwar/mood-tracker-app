import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { format } from "date-fns";

import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionType, MoodOptionWithTimestamp } from "../types";
import { MoodItemRow } from "../components/MoodItemRow";
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
