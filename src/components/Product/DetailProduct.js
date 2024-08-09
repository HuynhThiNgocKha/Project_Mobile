import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.sectionTitle}>Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailItem}>Color: {product.color || "N/A"}</Text>
        <Text style={styles.detailItem}>Size: {product.size || "N/A"}</Text>
        <Text style={styles.detailItem}>Weight: {product.weight || "N/A"}</Text>
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
