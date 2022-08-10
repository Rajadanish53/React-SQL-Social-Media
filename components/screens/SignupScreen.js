import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../shared/Screen";
import AppText from "../shared/AppText";
import defaultStyles from "../shared/defaultStyles";
import InputField from "../shared/InputField";
import AppButton from "../shared/AppButton";
import api from "../../api/index";
const SignupScreen = ({ navigation }) => {
  const [signUpModel, setsignUpModel] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = () => {
    // console.log(signUpModel);
    // if (
    //   signUpModel.userName &&
    //   signUpModel.email &&
    //   signUpModel.password === signUpModel.confirmPassword &&
    //   signUpModel.password !== ""
    // ) {
    //   // console.log(createNewPost);
    //   console.log("submit post");

    //   api
    //     .createNewUser(signUpModel)
    //     .then((res) => {
    //       console.log(res.data);
    //       console.log("received data");
    //     })
    //     .catch((err) => {
    //       console.log(err.response, "error");
    //     });
    // }
    navigation.navigate("Login");
  };
  const handleChange = (name, value) => {
    setsignUpModel({ ...signUpModel, [name]: value });
  };
  return (
    <Screen>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <AppText style={styles.createAccount}>
            Create a new <AppText style={styles.AccountTag}>Account</AppText>
          </AppText>
          <View style={{ width: "100%", alignItems: "center", marginTop: 50 }}>
            <AppText style={styles.getStarted}>Lets get started !</AppText>
            <InputField
              icon="account"
              placeholder="Username"
              onChangeText={(v) => handleChange("userName", v)}
            />
            <InputField
              icon="email"
              placeholder="Email"
              onChangeText={(v) => handleChange("email", v)}
            />
            <InputField
              icon="lock"
              placeholder="Password"
              prefixIcon="eye-outline"
              onChangeText={(v) => handleChange("password", v)}
            />
            <InputField
              icon="lock"
              placeholder="Confirm Password"
              prefixIcon="eye-outline"
              onChangeText={(v) => handleChange("confirmPassword", v)}
            />
          </View>
          <AppButton textStyle={{ color: "white" }} onPress={handleSubmit}>
            Signup
          </AppButton>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={(e) => navigation.navigate("Login")}
          >
            <AppText
              style={{ fontSize: 14, opacity: 0.5, alignSelf: "flex-end" }}
            >
              Already have an account ?
            </AppText>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    // marginHorizontal: defaultStyles.size.padding,
    // width: "100%",
  },
  getStarted: { fontSize: 18, opacity: 0.6 },
  createAccount: {
    fontSize: 24,
  },
  AccountTag: {
    fontSize: 30,
    fontFamily: "PoppinsBold",
    color: defaultStyles.color.primaryColor,
    // fontFamily: "PoppinsMedium",
  },
});
