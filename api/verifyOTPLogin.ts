import { BASE_URL } from "@env";

interface ApiResponse {
  success: boolean;
}

const verifyOTPLogin = async (phoneNumber: string, code: string) => {
  try {
    const data = JSON.stringify({
      phoneNumber: phoneNumber,
      otp: code,
    });

    const response = await fetch(`${BASE_URL}/access-tokens/phoneLoginVerify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    });

    const json: ApiResponse = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default verifyOTPLogin;
