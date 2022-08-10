import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppText = (props) => {
  return <Text style={[styles.common, props.style]}>{props.children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  common: {
    // color: "red",
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
});
