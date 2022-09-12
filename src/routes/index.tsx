import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export interface RoutesProps {}

export const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
