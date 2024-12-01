import axios from "axios";

export const subSubCategoryApi = async( setResponseData, setLoader, setErrors ) => {
    setLoader(true);
    try {
        const sendRequest = await axios.get(`http://192.168.255.56:8080/product/showSubSubCategory`);
        const response = sendRequest.data;
        setResponseData(response);
        console.log(response);
    } catch (error) {
        console.error(error);
        if(error.code === 'ECONNABORTED'){
            setErrors({email: 'Request Timed  Out'});
        }
        else if(error.response){
            const status = error.response.status;
            if(status === 400 || status === 404){
                setErrors({ email: 'Resource not found'});
            }
            else if(status === 500){
                const errorsList = error.response.data.errors;
                console.log(errorsList);
                const setErrorList = {};
                for(let er of errorsList){
                    setErrorList[er.path] = er.msg
                }
                setErrors(setErrorList);
            }
        }
        else if(error.request){
            setErrors({ email: 'Request Timed out, try again...'});
        }
        else {
            setErrors({email: 'Internal Server Error'});
        }
        return false;
    }finally{
        setLoader(false);
    }
}