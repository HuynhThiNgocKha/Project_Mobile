import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonWithIcon from "../../components/Button/ButtonIcon";
import Input from "../../components/Input/Input";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("ok");
    navigation.navigate("Home");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
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
      <ButtonWithIcon
        onPress={() => handleLogin()}
        title="Sign In"
        style={[styles.button]}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: "1em",
    gap: "1em",
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: "tomato",
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 90,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignIn;
