import React from "react";
// import { AuthProvider } from "./src/context/AuthContext";
import { SafeAreaView } from "react-native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainStackNavigator />
    </SafeAreaView>
  );
};

export default App;
