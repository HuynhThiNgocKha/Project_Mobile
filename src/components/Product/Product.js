import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonWithIcon from "../Button/ButtonIcon";

const Product = ({
  imageUrl,
  name,
  price,
  onAddToCart,
  numColumns,
  onDetailProduct,
}) => {
  const source = typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl;

  // Calculate flexBasis based on number of columns
  const flexBasis = `${100 / numColumns - 4}%`; // -4% for margin

  return (
    <View style={[styles.container, { flexBasis }]}>
      <TouchableOpacity onPress={onDetailProduct}>
        <Image source={source} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <ButtonWithIcon
          onPress={onAddToCart}
          iconName="shopping-cart"
          iconSize={24}
          iconColor="white"
          style={styles.button}
        />
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
    backgroundColor: "#f4e8e8",
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "tomato",
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Product;
