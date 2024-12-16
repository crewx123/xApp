import axios from "axios";

export const logoutApi = async() => {
    // setLoader(true);
    try {
        const sendRequest = await axios.get(`http://192.168.158.151:8080/users/logout`);
        const response = sendRequest.data;
        const { success } = response;
        return success;
    } catch (error) {
        console.log(error);
        return false;
    }
    // finally{
    //     setLoader(false);
    // }
}