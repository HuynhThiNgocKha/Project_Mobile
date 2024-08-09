import React from "react";
import { Image, StyleSheet } from "react-native";

const CImage = ({ source, style }) => {
  return <Image source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default CImage;
