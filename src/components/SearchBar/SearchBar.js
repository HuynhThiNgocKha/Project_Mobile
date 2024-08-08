import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../Input/Input";

const SearchBar = () => {
  return (
    <View style={{ flex: 1 }}>
      <Input placeholder="Search" icon="search" borderRadius={90} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchBar;
