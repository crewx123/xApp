import axios from "axios";

export const showAddressApi = async(setLoading, ipAddress) => {
    setLoading(true);
    try {
        const sendRequest = await axios.get(`http://${ipAddress}/users/addressShow`)
        console.log(sendRequest.data.address);
        return sendRequest.data.address;
    } catch (error) {
        console.log("Hello", JSON.stringify(error));
        return false;
    }finally{
        setLoading(false);
    }
}