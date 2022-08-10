import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../shared/Screen";
import AppText from "../shared/AppText";
import AppButton from "../shared/AppButton";
import defaultStyles from "../shared/defaultStyles";

const LandingPage = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.heading}>
          Best Social App To Make New Friends
        </AppText>
        <AppText style={styles.caption}>
          Find people With The Same Interests As You
        </AppText>
        <Image
          source={require("../../assets/landingpage.png")}
          style={styles.landingImg}
          resizeMode="contain"
        />
        <View style={styles.LandingBtns}>
          <AppButton
            buttonStyle={styles.loginBtn}
            textStyle={styles.login}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AppButton>
          <AppButton
            textStyle={styles.signup}
            onPress={() => navigation.navigate("Signup")}
          >
            Signup
          </AppButton>
        </View>
      </View>
    </Screen>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  LandingBtns: {
    marginTop: "auto",
    marginBottom: 10,
  },
  signup: {
    color: "white",
  },
  login: {
    color: "black",
  },

  loginBtn: {
    borderWidth: 0.3,
    borderColor: defaultStyles.color.borderColor,
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: defaultStyles.size.padding,
    //   paddingVertical: 10,
    //   backgroundColor: "#f7fffe",
    height: "100%",
  },
  caption: {
    fontSize: 17,
    opacity: 0.8,
    marginTop: 10,
    width: "75%",
  },
  heading: {
    // fontWeight: "bold",
    fontSize: 34,
    lineHeight: 44,
    fontFamily: "PoppinsBold",
  },
  landingImg: {
    height: 300,

    width: "100%",
  },
});
