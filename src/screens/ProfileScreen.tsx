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
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import BtnStyle from "../constants/BtnStyle";
import HeadingStyle from "../constants/HeadingStyle";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={HeadingStyle.text}>Profile Page</Text>
          <Text style={styles.headingDescription}>
            Create an account so you can explore
          </Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.inputsContainer}>
          <AppTextInput placeholder="First Name" />
          <AppTextInput placeholder="Last Name" />
          <AppTextInput placeholder="E-mail" />
        </View>
        <TouchableOpacity style={BtnStyle.container}>
          <Text style={BtnStyle.text}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
  },
  headingContainer: {
    alignItems: "center",
  },
  headingDescription: {
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.small,
    maxWidth: "80%",
    textAlign: "center",
  },
  profileImageContainer: {
    marginVertical: Spacing * 3,
    alignItems: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "black",
  },
  inputsContainer: {
    marginVertical: Spacing * 3,
  },
});

export default ProfileScreen;
