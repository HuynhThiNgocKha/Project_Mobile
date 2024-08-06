import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductList;
