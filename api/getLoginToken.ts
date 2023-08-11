import { BASE_URL } from "@env";

interface ApiResponse {
  success: boolean;
}

const getLoginToken = async (phoneNumber: string): Promise<any> => {
  try {
    const data = JSON.stringify({
      phoneNumber: phoneNumber,
    });

    const response = await fetch(`${BASE_URL}/access-tokens/phoneLoginToken`, {
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

export default getLoginToken;
