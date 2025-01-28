import axios from "axios";

export const showProductInfoApi = async( setLoading, ipAddress, url, setResponseData ) => {
    setLoading(true);
    try {
        console.log(`http://${ipAddress}/${url}`);
        const sendRequest = await axios.get(`http://${ipAddress}/${url}`);
        const response = sendRequest.data;
        setResponseData(response.data);
        console.log("showProductInfo data: ",response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return false;
    }finally{
        setLoading(false);
    }
}