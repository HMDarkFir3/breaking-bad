import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import { Characters } from "../screens/Characters";
import { Episodes } from "../screens/Episodes";

import { Header } from "../components/Header";

import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes: FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBarStyle: {
          height: 65,
          backgroundColor: theme.colors.primary,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: theme.colors.secondary_text,
        tabBarInactiveTintColor: theme.colors.placeholder_color,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: 16,
        },
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Screen
        name="Characters"
        component={Characters}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Episodes"
        component={Episodes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="film" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};
