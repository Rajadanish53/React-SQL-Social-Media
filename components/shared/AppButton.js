import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import defaultStyles from "./defaultStyles";

const AppButton = ({ textStyle, buttonStyle, children, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <AppText style={textStyle}>{children}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: ,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: defaultStyles.color.secondaryColor,
    padding: 8,
    borderRadius: 10,
  },
});
