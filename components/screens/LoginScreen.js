import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React from "react";
import Screen from "../shared/Screen";
import AppText from "../shared/AppText";
import defaultStyles from "../shared/defaultStyles";
import InputField from "../shared/InputField";
import AppButton from "../shared/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const LoginScreen = ({ navigation }) => {
  const [rememberMe, setrememberMe] = React.useState(false);
  const handleSubmit = (e) => {
    navigation.navigate("HomePage");
  };
  return (
    <Screen>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            paddingHorizontal: 24,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
          showsVerticalScrollIndicator={false}
        >
          <AppText style={styles.createAccount}>
            Login to your <AppText style={styles.AccountTag}>Account</AppText>
          </AppText>
          <View
            style={{
              width: "100%",
              // backgroundColor: "red",
              alignItems: "center",
              marginTop: 5,
              // justifyContent: "center",
            }}
          >
            {/* <AppText style={styles.getStarted}>Lets get started !</AppText> */}
            {/* <InputField icon="account" placeholder="Username" /> */}
            <InputField icon="email" placeholder="Email" />
            {/* <InputField
              icon="lock"
              placeholder="Password"
              prefixIcon="eye-outline"
            /> */}
            <InputField
              icon="lock"
              placeholder="Password"
              prefixIcon="eye-outline"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                // backgroundColor: "red",
                width: "100%",
              }}
            >
              <Switch
                value={rememberMe}
                onValueChange={(e) => setrememberMe(e)}
                thumbColor={defaultStyles.color.primaryColor}
                trackColor={defaultStyles.color.secondaryColor}
                // style={{ color: "red" }}
              />
              <AppText style={{ fontSize: 12 }}>Remember me</AppText>
            </View>
          </View>

          <AppButton
            onPress={handleSubmit}
            buttonStyle={{
              width: "50%",
              padding: 4,
              // height: "50%",
              alignSelf: "flex-end",
            }}
            textStyle={{
              color: "white",
            }}
          >
            Login{"  "}
          </AppButton>

          <AppText
            style={{ fontSize: 14, opacity: 0.5, alignSelf: "flex-end" }}
          >
            Forgot Password ?
          </AppText>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    // justifyContent: "center",

    // marginHorizontal: defaultStyles.size.padding,
    // width: "100%",
  },
  getStarted: { fontSize: 18, opacity: 0.6 },
  createAccount: {
    fontSize: 24,
  },
  AccountTag: {
    fontSize: 28,
    fontFamily: "PoppinsBold",
    color: defaultStyles.color.primaryColor,
    // fontFamily: "PoppinsMedium",
  },
});
