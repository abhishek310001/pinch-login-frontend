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

type Props = NativeStackScreenProps<RootStackParamList, "OTPVerification">;

const OTPVerificationScreen: React.FC<Props> = ({
  navigation: { navigate },
}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            OTP has been sent to your number via SMS
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/otp.png")}
            style={{
              height: 200,
              width: 200,
            }}
          />
        </View>
        <View style={{}}>
          <OTPTextInput placeholder="_  _  _  _  _  _" />
        </View>

        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-start",
            }}
          >
            Enter OTP sent to +91XXXXXXXXXX via SMS
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigate("Profile")}
          style={[
            BtnStyle.BtnContainer,
            {
              marginTop: 7 * Spacing,
            },
          ]}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Login with OTP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: Spacing * 2,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.medium,
              textDecorationLine: "underline",
            }}
          >
            Resend OTP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
              textDecorationLine: "underline",
            }}
          >
            Not your Number? Click Here to change
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({});
