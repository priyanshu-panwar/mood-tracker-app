import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home.screen";
import { History } from "./History.screen";
import { Analytics } from "./Analytics.screen";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? (
              <Ionicons name="planet" size={size} color={color} />
            ) : (
              <Ionicons name="planet-outline" size={size} color={color} />
            );
          } else if (route.name === "History") {
            return focused ? (
              <Ionicons name="cloudy" size={size} color={color} />
            ) : (
              <Ionicons name="cloudy-outline" size={size} color={color} />
            );
          } else if (route.name === "Analytics") {
            return focused ? (
              <Ionicons name="options" size={size} color={color} />
            ) : (
              <Ionicons name="options-outline" size={size} color={color} />
            );
          }
        },
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: "Past Moods" }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: "Analytics" }}
      />
    </BottomTabs.Navigator>
  );
};
