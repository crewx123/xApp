import axios from "axios";

export const updateAddressApi = async( setIsLoading, updatedAddressInfo, ipAddress ) => {
    setIsLoading(true);
    try {
        console.log(updatedAddressInfo);
        const sendRequest = await axios.put(`http://${ipAddress}/users/addressUpdate`, updatedAddressInfo);
        console.log(sendRequest.data);
        return true;
    } catch (error) {
        console.log(error.response.data);
        return false;
    }finally{
        setIsLoading(false);
    }
}