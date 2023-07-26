import { BASE_URL } from '@env'

interface ApiResponse {
    success: boolean;
  }

const sendOTPSignup = async (phoneNumber: string): Promise<any> => {
 try {
   const data = JSON.stringify({
     "phoneNumber": phoneNumber,
   });

   const response = await fetch(`${BASE_URL}/api/accounts/phoneSignUp`, {
     method: "POST",
     headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
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

export default sendOTPSignup
