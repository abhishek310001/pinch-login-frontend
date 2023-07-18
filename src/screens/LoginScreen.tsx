import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import MobileNumberInput from "../components/MobileNumberInput";
import BtnStyle from "../constants/BtnStyle";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const image = require("../../assets/images/bgImage.jpg");

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <ImageBackground source={image} resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingHeading}>Get Started</Text>
            <Text style={styles.greetingText}>Welcome To Pinch!</Text>
          </View>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Log In to continue</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text>Enter Your Mobile Number</Text>
            <MobileNumberInput placeholder="+91 XXXXXXXXXX" />
            <Text>
              We'll send you an OTP by SMS to confirm your mobile number
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate("OTPVerification");
            }}
            style={BtnStyle.BtnContainer}
          >
            <Text style={BtnStyle.BtnText}>Sign in</Text>
          </TouchableOpacity>

          <View style={{}}>
            <Text style={styles.helpText}>
              Having Trouble logging in? Get Help
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
    height: "100%",
  },
  greetingContainer: {
    alignItems: "center",
  },
  greetingHeading: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3,
  },
  greetingText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.xxLarge,
    maxWidth: "60%",
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: Spacing * 3,
  },
  helpText: {
    fontFamily: Font["poppins-semiBold"],
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.small,
  },
  loginTextContainer: {
    marginTop: Spacing * 15,
  },
  loginText: {
    fontSize: 25,
    fontWeight: "600",
  },
});
