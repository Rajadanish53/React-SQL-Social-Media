import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import defaultStyles from "./defaultStyles";

const Screen = (props) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 26,
    paddingVertical: 10,
    backgroundColor: defaultStyles.color.backgroundColor,
    // height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0px",
  },
});
