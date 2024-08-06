import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Categories;
