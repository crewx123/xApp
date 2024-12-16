import axios from "axios";

export const myProfileApi = async(setUserProfile, setLoading) => {
    setLoading(true);
    try {
        const sendRequest = await axios.get(`http://192.168.158.151:8080/users/userProfile`);
        const response = sendRequest.data.response;
        console.log(response);
        setUserProfile(response);
        // return true;
    } catch (error) {
        console.log(error);
        return error.response
        // if (error.code === 'ECONNABORTED') {
        // setErrors('Request timed out');
        // } 
        // else if (error.response) {
        // const status = error.response.status;
        // if (status === 404 || status === 400) {
        //     console.log("Response", error.response.data);
        //     setErrors({ email: error.response.data.response || "Resource not found" });
        // } else if (status === 500) {
        //     const errorsList = error.response.data.errors;
        //     console.log(errorsList);
        //     if(errorsList.length === 0){
        //         setErrors({ status: error.response.data.message || "Internal server error" });
        //         return;
        //     }
        //     let newErrors = {};
        //     errorsList.map(({ path, msg }) => {
        //         newErrors = { ...newErrors, [path] : msg };
        //     });
        //     console.log("ErrorsList: ", newErrors);
        //     setErrors({...newErrors});
        // }
        // } 
        // else if (error.request) {
        // //   console.log('Error Request:', error.request);
        // setErrors({ status: "Request Timeout, Please try again..." });
        // } 
        // // Other errors
        // else {
        // //   console.log('Error Message:', error.message);
        // setErrors({ status: error.message || 'Registration Failed, try again' });
        // }
    }finally{
        setLoading(false);
    }
}