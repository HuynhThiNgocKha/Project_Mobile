import React from "react";
import { StyleSheet, View } from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "react-native-vector-icons";
import Category from "./Category";

const categoriesData = [
  {
    IconComponent: () => (
      <MaterialIcons name="restaurant" size={24} color="white" />
    ),
    label: "Food",
    backgroundColor: "#f0e68c",
  },
  {
    IconComponent: () => (
      <Ionicons name="phone-portrait" size={24} color="white" />
    ),
    label: "Electronics",
    backgroundColor: "#add8e6",
  },
  {
    IconComponent: () => <FontAwesome name="book" size={24} color="white" />,
    label: "Books",
    backgroundColor: "#f08080",
  },
  {
    IconComponent: () => <FontAwesome5 name="laptop" size={24} color="white" />,
    label: "Laptops",
    backgroundColor: "#c0c0c0",
  },
  {
    IconComponent: () => (
      <MaterialIcons name="sports-tennis" size={24} color="white" />
    ),
    label: "Sports",
    backgroundColor: "#98fb98",
  },
  {
    IconComponent: () => <Ionicons name="shirt" size={24} color="white" />,
    label: "Fashion",
    backgroundColor: "#ffb6c1",
  },
  {
    IconComponent: () => (
      <FontAwesome5 name="mobile-alt" size={24} color="white" />
    ),
    label: "Mobile",
    backgroundColor: "#f5deb3",
  },
  {
    IconComponent: () => (
      <MaterialIcons name="camera-alt" size={24} color="white" />
    ),
    label: "Photography",
    backgroundColor: "#e6e6fa",
  },
];

const Categories = ({ flexDirection = "row", flexWrap = "wrap" }) => {
  return (
    <View style={[styles.container, { flexDirection, flexWrap }]}>
      {categoriesData.map((category, index) => (
        <Category
          key={category.label}
          onPress={() => console.log(`${category.label} button pressed`)}
          IconComponent={category.IconComponent}
          label={category.label}
          buttonStyle={{ backgroundColor: category.backgroundColor }}
          labelStyle={{ fontSize: 12, color: "#000" }}
          containerStyle={styles.categoryContainer}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  categoryContainer: {
    flexBasis: "23%", // Adjust based on spacing and padding
    margin: "1%", // Adjust spacing between items
    borderRadius: 10,
  },
});

export default Categories;
