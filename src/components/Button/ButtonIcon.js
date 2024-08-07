// src/components/ButtonWithIcon.js
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

const ButtonWithIcon = ({
  onPress,
  iconName,
  iconSize,
  iconColor,
  title,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <FontAwesome name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

ButtonWithIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

ButtonWithIcon.defaultProps = {
  iconSize: 24,
  iconColor: "white",
  style: {},
  textStyle: {},
};

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ButtonWithIcon;
