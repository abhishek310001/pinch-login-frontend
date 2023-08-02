import { BASE_URL } from "@env";

interface ApiResponse {
  success: boolean;
}

const getLoginToken = async (
  accountId: string,
  token: string
): Promise<any> => {
  try {
    const response = await fetch(
      `${BASE_URL}/accounts/${accountId}/tasks/account-info?account_id=${accountId}`,
      {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          // Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json: ApiResponse = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default getLoginToken;
