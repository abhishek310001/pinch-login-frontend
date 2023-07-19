import {
  Image,
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
import OTPTextInput from "../components/OTPTextInput";
import BtnStyle from "../constants/BtnStyle";
import HeadingStyle from "../constants/HeadingStyle";
import LinkStyle from "../constants/LinkStyle";

type Props = NativeStackScreenProps<RootStackParamList, "OTPVerification">;

const OTPVerificationScreen: React.FC<Props> = ({
  navigation: { navigate },
}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headingsContainer}>
          <Text style={HeadingStyle.text}>
            OTP has been sent to your number via SMS
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/otp.png")}
            style={styles.image}
          />
        </View>
        <View style={{}}>
          <OTPTextInput placeholder="_  _  _  _  _  _" />
        </View>
        <View>
          <Text style={styles.otpInfo}>
            Enter OTP sent to +91XXXXXXXXXX via SMS
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate("Profile")}
          style={[BtnStyle.container, styles.loginWithOTPBtn]}
        >
          <Text style={BtnStyle.text}>Login with OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryLink}>
          <Text style={LinkStyle.primary}>Resend OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={styles.secondaryLink}
        >
          <Text style={LinkStyle.secondary}>
            Not your Number? Click Here to change
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
  },
  headingsContainer: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  otpInfo: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: "flex-start",
    opacity: 0.8
  },
  primaryLink: {
    padding: Spacing * 2,
  },
  secondaryLink: {
    padding: Spacing,
  },
  loginWithOTPBtn: {
    marginTop: 7 * Spacing,
  },
});
