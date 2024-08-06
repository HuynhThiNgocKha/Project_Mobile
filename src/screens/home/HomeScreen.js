import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Categories from "../../components/Categories/Categories";
import ProductBanner from "../../components/Product/ProductBanner";
import ProductList from "../../components/Product/ProductList";
import SearchBar from "../../components/SearchBar/SearchBar";
// import SignIn from "../../components/sign/SignIn";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <Categories />
      <ProductBanner />
      <ProductList />
      {/* <SignIn /> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
