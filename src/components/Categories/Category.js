import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Category = ({
  onPress,
  IconComponent,
  label,
  buttonStyle,
  iconStyle,
  labelStyle,
  containerStyle,
  backgroundColor,
  flexDirection,
  flexWrap,
}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        backgroundColor && { backgroundColor },
        { flexDirection, flexWrap },
      ]}
    >
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <IconComponent style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </View>
  );
};

Category.propTypes = {
  onPress: PropTypes.func.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  label: PropTypes.string,
  buttonStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  flexDirection: PropTypes.oneOf(["row", "column"]),
  flexWrap: PropTypes.oneOf(["wrap", "nowrap"]),
};

Category.defaultProps = {
  label: "",
  buttonStyle: {},
  iconStyle: {},
  labelStyle: {},
  containerStyle: {},
  backgroundColor: null,
  flexDirection: "column",
  flexWrap: "nowrap",
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: "50%",
    aspectRatio: 1,
    borderRadius: "50%",
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    padding: "50%",
  },
  icon: {
    alignSelf: "center",
  },
  label: {
    marginTop: 8,
    fontSize: 16,
    color: "black",
  },
});

export default Category;
