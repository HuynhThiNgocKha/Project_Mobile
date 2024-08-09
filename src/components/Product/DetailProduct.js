import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import CImage from "../Imgae/Image";

const DetailProduct = ({ route, navigation }) => {
  const { product } = route.params;

  const source =
    typeof product.imageUrl === "string"
      ? { uri: product.imageUrl }
      : product.imageUrl;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CImage source={source} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Added to Cart")}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailProduct;
