import axios from "axios";

export const updateAddressApi = async( setIsLoading, updatedAddressInfo ) => {
    setIsLoading(true);
    try {
        console.log(updatedAddressInfo);
        const sendRequest = await axios.put(`http://192.168.158.151:8080/users/addressUpdate`, updatedAddressInfo);
        console.log(sendRequest.data);
        return true;
    } catch (error) {
        console.log(error.response.data);
        return false;
    }finally{
        setIsLoading(false);
    }
}