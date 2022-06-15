import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { format } from "date-fns";

import { MoodPicker } from "../components/MoodPicker";
import { MoodOptionType, MoodOptionWithTimestamp } from "../types";
import { MoodItemRow } from "../components/MoodItemRow";

export const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectedMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList((current) => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectedMood={handleSelectedMood} />
      {moodList.map((item) => (
        <MoodItemRow key={item.timestamp} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
