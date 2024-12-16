import axios from "axios";
import { storeToken } from "./token";

axios.defaults.withCredentials = true;
export const loginApi = async (setLoader, loginCredentials, setErrors, setUserInformation) => {
  setLoader(true);
  try {
    const sendRequest = await axios.post(`http://192.168.158.151:8080/users/login`, loginCredentials,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json',
      }
    );
    const response = sendRequest.data; 
    console.log('Response:', response);
    if(response.success){
      const { refreshToken } = response;
      storeToken("token", refreshToken);
      storeToken("userProfileData", JSON.stringify(response.userData));
      setUserInformation((prev) => ({...prev, ...response.userData}));
      return true;
    }

  } catch (error) {
    console.log(error);
    if (error.code === 'ECONNABORTED') {
      setErrors('Request timed out');
    } 
    else if (error.response) {
      const status = error.response.status;
      if (status === 404 || status === 400) {
        console.log("Response", error.response.data);
        setErrors({ email: error.response.data.response || "Resource not found" });
      } else if (status === 500) {
        const errorsList = error.response.data.errors;
        console.log(errorsList);
        if(errorsList.length === 0){
            setErrors({ status: error.response.data.message || "Internal server error" });
            return;
        }
        let newErrors = {};
        errorsList.map(({ path, msg }) => {
            newErrors = { ...newErrors, [path] : msg };
        });
        console.log("ErrorsList: ", newErrors);
        setErrors({...newErrors});
      }
    } 
    else if (error.request) {
    //   console.log('Error Request:', error.request);
      setErrors({ status: "Request Timeout, Please try again..." });
    } 
    // Other errors
    else {
    //   console.log('Error Message:', error.message);
      setErrors({ status: error.message || 'Registration Failed, try again' });
    }
    return false;
  } finally {
    setLoader(false);
  }
};
