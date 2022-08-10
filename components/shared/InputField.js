import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import defaultStyles from "./defaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const InputField = ({
  icon,
  prefixIcon,
  style,
  iconColor,
  prefixIconColor,
  ...props
}) => {
  const [focused, setfocused] = React.useState(false);
  const [Active, setActive] = React.useState(true);
  console.log(iconColor);
  return (
    <View style={[styles.inputStyle, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={
            iconColor
              ? iconColor
              : focused
              ? defaultStyles.color.primaryColor
              : defaultStyles.color.secondaryColor
          }
          style={{ position: "absolute", left: 12 }}
        />
      )}
      <TextInput
        {...props}
        secureTextEntry={!Active}
        style={[
          { paddingVertical: 4, fontSize: 16, paddingLeft: icon ? 40 : 10 },
        ]}
        onFocus={(e) => setfocused(true)}
        onBlur={(e) => setfocused(false)}
      />
      {prefixIcon && (
        <MaterialCommunityIcons
          onPress={(e) => setActive(!Active)}
          name={prefixIcon}
          size={20}
          color={
            prefixIconColor || Active
              ? "black"
              : defaultStyles.color.borderColor
          }
          style={{ position: "absolute", right: 12 }}
        />
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: defaultStyles.color.borderColor,
    borderWidth: 0.3,
    width: "100%",
    marginVertical: 10,
    borderRadius: 10,
    // padding: 3,
    paddingHorizontal: 10,

    justifyContent: "center",
  },
});
