import React, { useCallback, useContext, useState } from "react";
import { createContext } from "react";
import { MoodOptionType, MoodOptionWithTimestamp } from "./types";

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
    setMoodList((current) => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleSelectedMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
