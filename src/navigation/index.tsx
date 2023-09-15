import { DefaultTheme, NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import OTPVerificationLoginScreen from "../screens/OTPVerificationLoginScreen";
import OTPVerificationSignupScreen from "../screens/OTPVerificationSignupScreen";
import ProfileLoginScreen from "../screens/ProfileLoginScreen";
import ProfileSignupScreen from "../screens/ProfileSignupScreen";
import { RootStackParamList } from "../types";
import { Animated } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  };
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forSlide,
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
