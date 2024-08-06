// src/navigation/MainStackNavigator.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppTabNavigator from "./AppTabNavigator";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        component={AppTabNavigator}
        options={{ headerShown: false }}
      />
      {/* Thêm các màn hình khác không nằm trong tab ở đây */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
