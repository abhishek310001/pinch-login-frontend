import { BASE_URL } from "@env";

interface ApiResponse {
  success: boolean;
}

const userSignUpInfo = async (
  account_id: string,
  token: string,
  formData: FormData
): Promise<any> => {
  try {
    const data = formData;

    const response = await fetch(
      `${BASE_URL}/accounts/${account_id}/tasks/account-info?account_id=${account_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },

        body: data,
      }
    );
    const json: ApiResponse = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default userSignUpInfo;
