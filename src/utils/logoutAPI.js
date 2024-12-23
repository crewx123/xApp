import axios from "axios";

export const logoutApi = async(ipAddress) => {
    // setLoader(true);
    try {
        const sendRequest = await axios.get(`http://${ipAddress}/users/logout`);
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