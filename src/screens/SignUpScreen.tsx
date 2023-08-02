import {
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import MobileNumberInput from "../components/MobileNumberInput";
import BtnStyle from "../constants/BtnStyle";
import HeadingStyle from "../constants/HeadingStyle";
import SignupOTP from "../../api/sendOTPSignup";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUpScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e: any) => {
    if (phoneNumber.includes("+")) {
      setPhoneNumber(e);
    } else {
      setPhoneNumber("+91" + e);
    }
  };

  const isValidPhoneNumber = async () => {
    if (phoneNumber.length == 13) {
      const res = await SignupOTP(phoneNumber);
      if (res.success) {
        navigate("SignupOTP", { phoneNumber: phoneNumber });
      }
      ToastAndroid.show(res.message, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(
        "Please enter a valid phone number",
        ToastAndroid.SHORT
      );
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={HeadingStyle.text}>Get Started</Text>
          <Text style={styles.greetingText}>Welcome To Pinch!</Text>
        </View>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign Up to continue</Text>
        </View>
        <View style={styles.inputCard}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputContainerHeading}>
              Enter Your Mobile Number
            </Text>
            <MobileNumberInput
              maxLength={13}
              value={phoneNumber}
              onChangeText={handleChange}
              placeholder="+91XXXXXXXXXX"
            />
            <Text style={styles.inputFooter}>
              We'll send you an OTP by SMS to confirm your mobile number
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => isValidPhoneNumber()}
            style={BtnStyle.container}
          >
            <Text style={BtnStyle.text}>Send OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("Login")}>
            <Text style={styles.helpText}>Already Have an account? LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    padding: Spacing,
    height: "100%",
    backgroundColor: Colors.onPrimary,
  },
  greetingContainer: {
    alignItems: "center",
  },
  greetingText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.xxLarge,
    maxWidth: "60%",
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: Spacing,
  },
  helpText: {
    fontFamily: Font["poppins-semiBold"],
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.small,
  },
  loginTextContainer: {
    marginTop: Spacing * 12,
  },
  loginText: {
    fontSize: 25,
    fontWeight: "600",
    marginHorizontal: Spacing * 2,
  },
  inputContainerHeading: {
    marginHorizontal: Spacing,
    fontSize: FontSize.medium,
    fontWeight: "600",
  },
  inputCard: {
    marginTop: Spacing * 2,
    padding: Spacing,
    backgroundColor: "#fca5a5",
    borderRadius: Spacing,
    height: "100%",
  },
  inputFooter: {
    marginHorizontal: Spacing,
    opacity: 0.6,
  },
});
