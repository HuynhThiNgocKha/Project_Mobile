import PropTypes from "prop-types";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CartItem from "../../components/Carts/CartItem";

const Carts = ({ products }) => {
  return products.length > 0 ? (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CartItem product={item} />}
      contentContainerStyle={styles.container}
    />
  ) : (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Your cart is empty.</Text>
    </View>
  );
};

Carts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};

Carts.defaultProps = {
  products: [],
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
});

export default Carts;
