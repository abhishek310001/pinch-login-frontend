import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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
import OTPTextInput from "../components/OTPTextInput";
import BtnStyle from "../constants/BtnStyle";
import HeadingStyle from "../constants/HeadingStyle";
import LinkStyle from "../constants/LinkStyle";
import verifyOTPLogin from "../../api/verifyOTPLogin";
import getLoginToken from "../../api/getLoginToken";

type Props = NativeStackScreenProps<RootStackParamList, "LoginOTP">;

const OTPVerificationLoginScreen: React.FC<Props> = ({
  navigation: { navigate },
}) => {
  const { phoneNumber } = require("./LoginScreen");
  const [OTPcode, setOTPcode] = useState("");

  const verifyOTP = async (code) => {
    if (code.length == 6) {
      const res = await verifyOTPLogin(phoneNumber, code);
      if (res.success) {
        const loginInfo = await getLoginToken(phoneNumber);
        module.exports.loginInfo = loginInfo;
        navigate("ProfileLogin");
      }
      console.log(code);
      ToastAndroid.show(res.message, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Please enter a valid OTP", ToastAndroid.SHORT);
    }
  };

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
        <View>
          <OTPTextInput
            maxLength={6}
            value={OTPcode}
            onChangeText={setOTPcode}
            placeholder="_  _  _  _  _  _"
          />
        </View>
        <View>
          <Text style={styles.otpInfo}>
            Enter OTP sent to {phoneNumber} via SMS
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => verifyOTP(OTPcode)}
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

export default OTPVerificationLoginScreen;

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
    opacity: 0.8,
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
