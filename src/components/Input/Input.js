import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  icon,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {icon && <Icon name={icon} style={styles.icon} />}
        <TextInput
          style={[styles.input, style, icon ? styles.inputWithIcon : null]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#aaa"
        />
      </View>
    </View>
  );
};

// Xác định kiểu thuộc tính
Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object,
  icon: PropTypes.string,
};

Input.defaultProps = {
  label: "",
  placeholder: "",
  secureTextEntry: false,
  style: {},
  icon: null,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    position: "relative", // Đảm bảo inputContainer có position relative để icon có thể tuyệt đối
  },
  icon: {
    position: "absolute",
    left: 10,
    fontSize: 20,
    color: "#888",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    paddingLeft: 40,
  },
});

export default Input;
