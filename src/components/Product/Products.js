import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
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
    price: 39.99,
  },
  {
    imageUrl: require("../../assets/images/1.jpg"),
    name: "Product 4",
    price: 49.99,
  },
  {
    imageUrl: require("../../assets/images/2.jpg"),
    name: "Product 5",
    price: 59.99,
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg",
    name: "Product 6",
    price: 69.99,
  },
];

const Products = () => {
  const { width } = useWindowDimensions();

  // Xác định column theo kích thước màn hình
  const numColumns = width < 600 ? 2 : width < 900 ? 3 : 4;

  const navigation = useNavigation();

  const handleDetailProduct = (product) => {
    navigation.navigate("DetailProduct");
    console.log(`${product.name} detail`);
  };

  const handleAddToCart = (product) => {
    navigation.navigate("Cart");
    console.log(`${product.name} added to cart`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.productsContainer}>
        {products.map((product, index) => (
          <Product
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
            onDetailProduct={() => handleDetailProduct(product)}
            numColumns={numColumns}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default Products;
