import { BASE_URL } from '@env'

interface ApiResponse {
    success: boolean;
  }

const verifyOTPLogin = async (phoneNumber: string, code:string) => {
    try {
      const data = JSON.stringify({
        to: phoneNumber,
        code,
      });
   
      const response = await fetch(`${BASE_URL}/accounts/phoneLoginVerify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
   
      const json = await response.json();
      return json.success;
    } catch (error) {
      console.error(error);
      return false;
    }
   };

export default verifyOTPLogin
