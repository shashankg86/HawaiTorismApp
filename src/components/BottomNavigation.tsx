import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import SurfingPage from "./SurfingPage";
import HulaPage from "./HulaPage";
import VolcanoesPage from "./VolcanoesPage";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === "Surfing") {
            return <FontAwesome5 name="water" size={size} color={color} />;
          } else if (route.name === "Hula") {
            return <Ionicons name="musical-note" size={size} color={color} />;
          } else if (route.name === "Volcanoes") {
            return <Ionicons name="triangle-outline" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Surfing"
        component={SurfingPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Hula"
        component={HulaPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Volcanoes"
        component={VolcanoesPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
