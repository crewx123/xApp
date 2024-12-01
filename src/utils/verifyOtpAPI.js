import axios from "axios";

export const verifyOTP_Api = async (setLoader, email, otp, setErrors) => {
  setLoader(true);
  try {
    console.log(email, otp);
    otp = parseInt(otp.join(''));
    console.log(otp);
    const sendRequest = await axios.post(`http://192.168.110.56:8080/users/emailOTPVerify`, { email, otp  }, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json', 
      timeout: 5000, 
    });
    const response = sendRequest.data;
    console.log('Response:', response);
    if(response.success){
      console.log("Otp has been verified");
      setErrors('');
      return true;
    }
  } catch (error) {
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
      setErrors({ status: error.message || 'Enter the valid email and, try again...' });
    }
    return false;
  } finally {
    setLoader(false);
  }
};
