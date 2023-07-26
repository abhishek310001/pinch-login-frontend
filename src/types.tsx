import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  LoginOTP: undefined;
  SignupOTP: undefined;
  ProfileSignup: undefined;
  ProfileLogin: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
