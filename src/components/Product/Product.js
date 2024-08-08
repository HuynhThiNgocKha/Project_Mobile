import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Product = ({ imageUrl, name, price, onAddToCart }) => {
  const source = typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl;
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={onAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "pink",
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
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

export default Product;
