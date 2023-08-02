import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type LoginInfo= {
  accountId: string;
  loginToken:  string;
}

type PhoneNumber = {
  phoneNumber: string;
}

type ProfileParams = {
  firstName: string;
  lastName: string;
}

export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  LoginOTP: PhoneNumber;
  SignupOTP: PhoneNumber;
  ProfileSignup: LoginInfo;
  ProfileLogin: ProfileParams;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
