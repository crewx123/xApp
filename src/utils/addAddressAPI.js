import axios from "axios";

export const addAddressApi = async( setLoading, newAddressDetails ) => {
    setLoading(true);
    try {
        console.log(newAddressDetails);
        const sendRequest = await axios.post(`http://192.168.158.151:8080/users/addressAdd`, newAddressDetails)
        const response = sendRequest.data;
        console.log(response);
        return true;
    } catch (error) {
        console.log(error.response.data);
        return false;
    }finally{
        setLoading(false);
    }
}