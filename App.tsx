import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { BottomTabsNavigator } from "./screens/BottomTabs.navigator";
import { AppProvider } from "./App.provider";

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Kalam: require("./assets/fonts/Kalam-Regular.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
