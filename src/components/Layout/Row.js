import React from "react";
import { StyleSheet, View } from "react-native";

const Row = ({ children, style }) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Row.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Row;
