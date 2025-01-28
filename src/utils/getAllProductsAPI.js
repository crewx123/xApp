import axios from "axios";

export const getAllProducts = async( setLoading, ipAddress, url, setResponseData ) => {
    setLoading(true);
    try {
        console.log(`http://${ipAddress}/${url}`);
        const sendRequest = await axios.get(`http://${ipAddress}/${url}`);
        const response = sendRequest.data;
        setResponseData(response);
        console.log(response);
        return true;
    } catch (error) {
        console.log(error.response.data);
        return false;
    }finally{
        setLoading(false);
    }
}