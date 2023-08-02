import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import HeadingStyle from "../constants/HeadingStyle";

type Props = NativeStackScreenProps<RootStackParamList, "ProfileLogin">;

const ProfileLoginScreen: React.FC<Props> = ({ route }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={HeadingStyle.text}>Welcome</Text>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: route.params.imageUrl }}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.headingDescription}>
            {route.params.firstName} {route.params.lastName}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
    justifyContent: "center",
    height: "100%",
  },
  headingContainer: {
    alignItems: "center",
  },
  headingDescription: {
    marginVertical: Spacing * 2,
    fontFamily: Font["poppins-regular"],
    fontSize: FontSize.large,
    maxWidth: "80%",
    textAlign: "center",
  },
  profileImageContainer: {
    marginVertical: Spacing * 2,
    alignItems: "center",
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: "black",
  },
});

export default ProfileLoginScreen;
