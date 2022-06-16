import React, { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MoodOptionType, MoodOptionWithTimestamp } from "./types";

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};

const dataKey = "my-app-data";

const setAppData = async (appData: AppData): Promise<void> => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch {}

  return null;
};

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectedMood: (mood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectedMood: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectedMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList((current) => {
      const newMoodList = [
        ...current,
        { mood: selectedMood, timestamp: Date.now() },
      ];

      setAppData({ moodList: newMoodList });

      return newMoodList;
    });
  }, []);

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };
    fetchAppData();
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleSelectedMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
