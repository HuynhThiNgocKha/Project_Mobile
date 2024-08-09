// src/navigation/MainStackNavigator.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cart from "../screens/Cart/Cart.js";
import Payment from "../screens/Payment/Payment.js";
import DetailProduct from "../screens/Product/DetailProduct.js";
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
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={({ route }) => ({
          title: route.params.name || "Product Detail",
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        })}
      />
      <Stack.Screen
        name="payment"
        component={Payment}
        options={({ route }) => ({
          title: route.params.name || "Payment",
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        })}
      />
      {/* Thêm các màn hình khác không nằm trong tab ở đây */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
