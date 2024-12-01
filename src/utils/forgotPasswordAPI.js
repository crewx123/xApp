import axios from "axios";
import { Alert } from "react-native";

export const forgotPassword = async( setLoader, email ) => {
    setLoader(true);
    try {
        const sendRequest = await axios.post(`http://192.168.110.56:8080/users/forgotPassword`, { email }, 
            {
                headers: {
                    "Content-Type": 'json/application'
                },
                timeout: 5000
            }
        )
        const response = await sendRequest.data;
        console.log(response);
        if(response.success){
            Alert('Link has been sent to your email');
            return true;
        }
    } catch (error) {
        console.log(error);
        if(error.code === 'ECONNABORTED'){

        }else if( error.response){
            const status = error.response.status;
            if(status === 400 || status === 404){
                Alert.alert('Resource Not found');
            }
            else if(status === 500){
                const errors = error.response.data.errors;
            errors.map(({ path, msg }, index))
            }
            
        }


        console.log(errorsList);
    }finally{
        setLoader(false);
    }
}