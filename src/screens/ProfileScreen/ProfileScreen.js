import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileScreenNoLogin from "./ProfileScreenNoLogin";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileScreenNoLogin />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
