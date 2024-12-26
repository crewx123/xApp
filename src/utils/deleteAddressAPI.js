import axios from "axios";

export const deleteAddressApi = async( setLoading, _id, ipAddress ) => {
    setLoading(true);
    try {
        console.log(_id);
        const sendRequest = await axios.get(`http://${ipAddress}/users/addressDelete?addressId=${_id}`);
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
