import axios from "axios";
import { Alert } from "react-native";

export const registerApi = async (setLoader, registerData, setErrors) => {
  setLoader(true);
  
  try {
    const sendRequest = await axios.post(`http://192.168.126.56:8080/users/register`, registerData, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json', 
      timeout: 5000, 
    });

    const response = sendRequest.data; 
    console.log('Response:', response);
    setErrors({ status: "Successfully Registered" });

  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      setErrors('Request timed out');
    } 
    else if (error.response) {
      const status = error.response.status;
      console.log('Error Response Status:', status);
      console.log("Response", error.response);
      if (status === 404) {
        setErrors({ status: error.response.data.message || "Resource not found" });
      } else if (status === 500) {
        setErrors({ status: error.response.data.message || "Internal server error" });
      }
    } 
    else if (error.request) {
      console.log('Error Request:', error.request);
      Alert.alert("Status", JSON.stringify(error.request));  // Show the request error
      setErrors({ status: "Request Timeout, Please try again..." });
    } 
    // Other errors
    else {
      console.log('Error Message:', error.message);
      setErrors({ status: 'Registration Failed, try again' });
    }
  } finally {
    setLoader(false);
  }
};
