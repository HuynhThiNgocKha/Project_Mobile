import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

const Category = ({
  onPress,
  iconName,
  iconSize,
  iconColor,
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
        <FontAwesome
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={[styles.icon, iconStyle]}
        />
      </TouchableOpacity>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </View>
  );
};

Category.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
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
  iconSize: 24,
  iconColor: "white",
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
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
