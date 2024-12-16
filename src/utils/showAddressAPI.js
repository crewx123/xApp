import axios from "axios";

export const showAddressApi = async(setLoading) => {
    setLoading(true);
    try {
        const sendRequest = await axios.get(`http://192.168.158.151:8080/users/addressShow`)
        console.log(sendRequest.data.address);
        return sendRequest.data.address;
    } catch (error) {
        console.log(error.response.data);
        return false;
    }finally{
        setLoading(false);
    }
}