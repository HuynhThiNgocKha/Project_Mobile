import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../Input/Input";

const SearchBar = () => {
  return (
    <View style={{ flex: 1 }}>
      <Input placeholder="Search" icon="search" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchBar;
