import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { FC } from "react";
import { ThemeProvider } from "styled-components/native";

import { AuthProvider } from "./src/contexts/AuthContext";

import { Routes } from "./src/routes";

import { dark } from "./src/global/theme/dark";

export const App: FC = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={dark}>
      <AuthProvider>
        <StatusBar />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};
