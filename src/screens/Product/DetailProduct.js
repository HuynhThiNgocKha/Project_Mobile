import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ButtonWithIcon from "../../components/Button/ButtonIcon";
import CImage from "../../components/Imgae/Image";
import Row from "../../components/Layout/Row";

const DetailProduct = ({ route, navigation }) => {
  const { product } = route.params;

  const source =
    typeof product.imageUrl === "string"
      ? { uri: product.imageUrl }
      : product.imageUrl;

  const handleBuyNow = (product) => {
    navigation.navigate("payment", { product });
    alert("Proceeding to checkout...");
  };

  const handleAddToCart = (product) => {
    navigation.navigate("Cart");
    console.log(`${product.name} added to cart`);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <CImage source={source} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.sectionTitle}>Details</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailItem}>Color: {product.color || "N/A"}</Text>
          <Text style={styles.detailItem}>Size: {product.size || "N/A"}</Text>
          <Text style={styles.detailItem}>
            Weight: {product.weight || "N/A"}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailItem}>Color: {product.color || "N/A"}</Text>
          <Text style={styles.detailItem}>Size: {product.size || "N/A"}</Text>
          <Text style={styles.detailItem}>
            Weight: {product.weight || "N/A"}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Reviews</Text>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text style={styles.reviewText}>{review}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noReviewsText}>No reviews yet</Text>
        )}
      </ScrollView>
      <Row style={[styles.rowButton]}>
        <ButtonWithIcon
          onPress={() => handleAddToCart(product)}
          iconName="shopping-cart"
          iconSize={24}
          iconColor="white"
          style={styles.button}
        />
        <ButtonWithIcon
          onPress={() => handleBuyNow(product)}
          title="Buy now"
          style={[styles.button, styles.buyNowButton]}
        />
      </Row>
    </>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  detailsContainer: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  detailItem: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  review: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: "stretch",
  },
  reviewText: {
    fontSize: 14,
    color: "#444",
  },
  noReviewsText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff7043",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    maxHeight: "90%",
    minWidth: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buyNowButton: {
    backgroundColor: "#28a745",
  },
  rowButton: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderColor: "#e8e4e4",
    paddingVertical: 5,
  },
});

export default DetailProduct;
