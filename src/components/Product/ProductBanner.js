import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Banner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ddd",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductBanner;
