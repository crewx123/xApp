import axios from "axios";

export const deleteAddressApi = async( setLoading, _id ) => {
    setLoading(true);
    try {
        console.log(_id);
        const sendRequest = await axios.get(`http://192.168.255.56:8080/users/addressDelete?addressId=${_id}`);
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
