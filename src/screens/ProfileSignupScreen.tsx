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
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import BtnStyle from "../constants/BtnStyle";
import HeadingStyle from "../constants/HeadingStyle";
import * as ImagePicker from "expo-image-picker";
import DummyProfile from "../../assets/images/profile.jpg";
import userSignUpInfo from "../../api/userSignUpInfo";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileSignup">;

const dummyProfileUri = Image.resolveAssetSource(DummyProfile).uri;

const ProfileSignupScreen: React.FC<Props> = ({ navigation: { navigate },route }) => {
  const [image, setImage] = useState(dummyProfileUri);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const userSignUp = async () => {
    if (firstName === "" || lastName === "" || email === "") {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
      return;
    }
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("profile_img", {
      name: "profile_img",
      type: "image/jpeg",
      uri: image,
    });
    console.log(route.params.accountId, route.params.loginToken, formData);
    const res = await userSignUpInfo(
      route.params.accountId,
      route.params.loginToken,
      formData
    );
    console.log(res.message);
    if (res.success) {
      ToastAndroid.show("Profile created successfully", ToastAndroid.SHORT);
      navigate("ProfileLogin",{firstName: firstName, lastName: lastName});
    } else {
      ToastAndroid.show("Profile creation failed", ToastAndroid.SHORT);
    }
  };

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
          <TouchableOpacity onPress={() => pickImage()}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputsContainer}>
          <AppTextInput
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <AppTextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
          <AppTextInput
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
          />
        </View>
        <TouchableOpacity onPress={userSignUp} style={BtnStyle.container}>
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

export default ProfileSignupScreen;
