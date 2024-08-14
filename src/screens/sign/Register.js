import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonWithIcon from "../../components/Button/ButtonIcon";
import Input from "../../components/Input/Input";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    alert("ok");
    navigation.navigate("Home");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        icon="envelope"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        icon="lock"
      />
      <Input
        label="Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Enter confirm your password"
        secureTextEntry
        icon="lock"
      />

      <ButtonWithIcon
        onPress={() => handleLogin()}
        title="Register"
        style={[styles.button]}
        textStyle={styles.buttonText}
      />

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>
          Already have an account?{" "}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signIn");
            }}
          >
            Login
          </TouchableOpacity>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "tomato",
    padding: 15,
    borderRadius: 90,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkButton: {
    alignItems: "center",
  },
  linkText: {
    color: "tomato",
    fontSize: 16,
  },
});

export default Register;
