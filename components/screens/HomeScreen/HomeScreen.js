import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../shared/Screen";
import SearchBar from "./SearchBar";
import MainPage from "./MainPage";

const HomeScreen = () => {
  return (
    <Screen>
      <View style={{ height: "100%" }}>
        <SearchBar />

        <MainPage />
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
