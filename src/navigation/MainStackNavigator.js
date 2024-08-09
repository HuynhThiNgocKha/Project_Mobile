// src/navigation/MainStackNavigator.js
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cart from "../screens/Cart/Cart.js";
import Payment from "../screens/Payment/Payment.js";
import DetailProduct from "../screens/Product/DetailProduct.js";
import AppTabNavigator from "./AppTabNavigator";

const Stack = createNativeStackNavigator();

const getCommonHeaderOptions = (route, defaultTitle) => ({
  title: route.params?.name || defaultTitle,
  headerStyle: { backgroundColor: "tomato" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" },
});

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
        options={({ route }) => getCommonHeaderOptions(route, "Product Detail")}
      />
      <Stack.Screen
        name="payment"
        component={Payment}
        options={({ route }) => getCommonHeaderOptions(route, "Payment")}
      />
      {/* Thêm các màn hình khác không nằm trong tab ở đây */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
