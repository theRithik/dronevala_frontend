import axios from "axios";
import endpoints from "../../config";
import { message } from "antd";


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
            message.error(err.response.data.message)
          } else if (err.request) {
            // The request was made but no response was received
            message.error(err.message)
          } else {
            // Something else happened while setting up the request
            message.error(err.message)
          }
    }

)


export default AwsAxios