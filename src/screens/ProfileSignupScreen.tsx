import {
  Image,
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
import Font from "../constants/Font";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import BtnStyle from "../constants/BtnStyle";
import HeadingStyle from "../constants/HeadingStyle";
import * as ImagePicker from "expo-image-picker";
import DummyProfile from "../../assets/images/profile.jpg";
import userSignUpInfo from "../../api/userSignUpInfo";
import getProfileInfo from "../../api/getProfileInfo";

type Props = StackScreenProps<RootStackParamList, "ProfileSignup">;

const dummyProfileUri = Image.resolveAssetSource(DummyProfile).uri;
let imagePicked = false;

const ProfileSignupScreen: React.FC<Props> = ({
  navigation: { navigate },
  route,
}) => {
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

    if (!result.canceled) {
      imagePicked = true;
      setImage(result.assets[0].uri);
    }
  };

  const userSignUp = async () => {
    if (firstName === "" || lastName === "" || email === "") {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
      return;
    }
    const formDetails = new FormData();
    formDetails.append("first_name", firstName);
    formDetails.append("last_name", lastName);
    formDetails.append("email", email);
    if (imagePicked) {
      formDetails.append("profile_img", {
        name: "profile.jpg",
        type: "image/jpeg",
        uri: image,
      });
    }
    const res = await userSignUpInfo(
      route.params.accountId,
      route.params.token,
      formDetails
    );
    if (res.success) {
      ToastAndroid.show("Profile created successfully", ToastAndroid.SHORT);
      const profileInfo = await getProfileInfo(
        route.params.accountId,
        route.params.token
      );
      navigate("ProfileLogin", {
        firstName: profileInfo.first_name,
        lastName: profileInfo.last_name,
        imageUrl: profileInfo.profile_img,
      });
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
