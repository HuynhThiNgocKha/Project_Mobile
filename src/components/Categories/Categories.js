import React from "react";
import { StyleSheet, View } from "react-native";
import Category from "./Category";

const categoriesData = [
  {
    iconName: "tshirt",
    label: "Clothes",
    iconColor: "white",
    backgroundColor: "#e0e0e0",
  },
  {
    iconName: "utensils",
    label: "Food",
    iconColor: "white",
    backgroundColor: "#f0e68c",
  },
  {
    iconName: "mobile-alt",
    label: "Electronics",
    iconColor: "white",
    backgroundColor: "#add8e6",
  },
  {
    iconName: "book",
    label: "Books",
    iconColor: "white",
    backgroundColor: "#f08080",
  },
  // Thêm các hạng mục khác tại đây
];

const Categories = ({ flexDirection = "row", flexWrap = "wrap" }) => {
  return (
    <View style={[styles.container, { flexDirection, flexWrap }]}>
      {categoriesData.map((category, index) => (
        <Category
          key={index}
          onPress={() => console.log(`${category.label} button pressed`)}
          iconName={category.iconName}
          iconSize={24}
          iconColor={category.iconColor}
          label={category.label}
          buttonStyle={{ backgroundColor: category.backgroundColor }}
          labelStyle={{ fontSize: 18, color: "#000" }}
          backgroundColor="#e0e0e0"
          containerStyle={{ borderRadius: 10, padding: 10 }}
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
    justifyContent: "center",
    gap: 10,
  },
});

export default Categories;
