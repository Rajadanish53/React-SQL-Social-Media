import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import InputField from "../../shared/InputField";
import { Feather, FontAwesome } from "@expo/vector-icons";
import defaultStyles from "../../shared/defaultStyles";

// import {  } from "react-native-web";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.8 }}>
        <TextInput placeholder="Search..." style={styles.inputField} />
        <FontAwesome
          name="search"
          size={16}
          color={defaultStyles.color.primaryColor}
          style={{ position: "absolute", right: 14, top: "23%" }}
        />
      </View>
      <TouchableOpacity>
        <FontAwesome
          size={22}
          name="user-circle"
          color={defaultStyles.color.primaryColor}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather
          size={22}
          name="settings"
          color={defaultStyles.color.primaryColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 0.1,
    // backgroundColor: "",
    paddingHorizontal: 24,
  },
  inputField: {
    paddingRight: 34,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: defaultStyles.color.primaryColor,
    borderWidth: 0.5,
  },
});
