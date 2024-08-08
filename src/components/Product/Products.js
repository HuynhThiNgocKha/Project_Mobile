import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Product from "./Product";

const products = [
  {
    imageUrl: require("../../assets/images/1.jpg"),
    name: "Product 1",
    price: 19.99,
  },
  {
    imageUrl: require("../../assets/images/2.jpg"),
    name: "Product 2",
    price: 29.99,
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg",
    name: "Product 3",
    price: 29.99,
  },
];

const Products = ({ flexDirection = "row", flexWrap = "wrap" }) => {
  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart`);
  };

  return (
    <ScrollView style={[styles.container, { flexDirection, flexWrap }]}>
      {products.map((product, index) => (
        <Product
          key={index}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
          onAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
});

export default Products;
