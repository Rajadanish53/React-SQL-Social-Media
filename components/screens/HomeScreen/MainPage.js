import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FeedTab from "./Tabs/FeedTab";
import MessagesTab from "./Tabs/MessagesTab";
const Tab = createMaterialBottomTabNavigator();
const MainPage = () => {
  return (
    // <Text>test hello world</Text>
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedTab} />
        <Tab.Screen name="Messages" component={MessagesTab} />
      </Tab.Navigator>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
