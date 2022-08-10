import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./components/screens/LandingPage";
import LoginScreen from "./components/screens/LoginScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./components/screens/SignupScreen";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    PoppinsMedium: require("./assets/Poppins/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/Poppins/Poppins-Bold.ttf"),
    PoppinsLight: require("./assets/Poppins/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        // defaultScreenOptions={{ headerShown: false, headerBackground: "red" }}
        screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />
      </Stack.Navigator>
      {/* < /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
