import axios from "axios";

export const udpateProfileApi = async( setloading, newProfileData, ipAddress ) => {
    setloading(true);
    try {
        const sendRequest = await axios.post(`http://${ipAddress}/user/userProfileUpdate`, newProfileData);
        const response = sendRequest.data;
        const { success } = response.data;
        if(success){
            return true;
        }
    } catch (error) {
        if(error.code === 'ECONNABORTED'){
            console.log('Session time out, please try again');
        }
        else if(error.response){
            const status = error.response.status;
            if(status == 400 || status === 404){
                console.log('Something went wrong');
            }
            else if(status === 500){
                const newErrors = error.response.data.error;
                let errorsList = {};
                for(let err of newErrors){
                    errorsList[err.path] = errorsList[err.message];
                }
                console.log(errorsList);
            }
        }
        else if(error.request){
            console.log('Resources not found');
        }
        else{
            console.log('Something went wrong, please try again later');
        }
    }finally{
        setloading(false);
    }
}