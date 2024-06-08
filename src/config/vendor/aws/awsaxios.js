import axios from "axios";
import endpoints from "../../config";


const AwsAxios = axios.create({
    baseURL:endpoints.aws,
    headers:{
        'Content-Type':"multipart/form-data"
    }
})


AwsAxios.interceptors.response.use(
    response=>response,
    err=>{
        if (err.response) {
            // The request was made, but the server responded with a status code
            alert(err.response.data)
          } else if (err.request) {
            // The request was made but no response was received
            alert(err.message)
          } else {
            // Something else happened while setting up the request
            alert(err.message)
          }
    }

)


export default AwsAxios