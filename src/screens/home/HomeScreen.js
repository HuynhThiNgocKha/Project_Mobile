import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ButtonWithIcon from "../../components/Button/ButtonIcon";
import Categories from "../../components/Categories/Categories";
import Row from "../../components/Layout/Row";
import ProductBanner from "../../components/Product/ProductBanner";
import Products from "../../components/Product/Products";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Row style={styles.rowSearchContainer}>
        <SearchBar />
        <ButtonWithIcon
          onPress={() => navigation.navigate("Cart")}
          iconName="shopping-cart"
          iconSize={24}
          iconColor="tomato"
          style={{ padding: 10, marginLeft: 10 }}
        />
      </Row>
      <Categories />
      <Products />
      <ProductBanner />
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
  rowSearchContainer: {
    paddingHorizontal: "1%",
    paddingTop: "1%",
    marginBottom: "1%",
  },
});
