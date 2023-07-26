import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import OTPVerificationLoginScreen from "../screens/OTPVerificationLoginScreen";
import OTPVerificationSignupScreen from "../screens/OTPVerificationSignupScreen";
import ProfileLoginScreen from "../screens/ProfileLoginScreen";
import ProfileSignupScreen from "../screens/ProfileSignupScreen";
import { RootStackParamList } from "../types";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginOTP" component={OTPVerificationLoginScreen} />
      <Stack.Screen name="SignupOTP" component={OTPVerificationSignupScreen} />
      <Stack.Screen name="ProfileSignup" component={ProfileSignupScreen} />
      <Stack.Screen name="ProfileLogin" component={ProfileLoginScreen} />
    </Stack.Navigator>
  );
}
