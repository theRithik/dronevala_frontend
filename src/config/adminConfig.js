import axios from "axios";
import { message } from "antd";
import endpoints from "./config";

const AdminaxiosInstance= axios.create({
    baseURL:endpoints.url,
    headers:{
        'Content-Type': 'application/json',
    }
})

AdminaxiosInstance.interceptors.request.use(
  config => {
    config.headers.admintoken=localStorage.getItem('AdminT')
  return config
  },
  error => {
    return Promise.reject(error);
  }
)

AdminaxiosInstance.interceptors.response.use(
    response=>response,
    err=>{
      // console.log(err)
     
        if (err.response?.status ===404) {
            // The request was made, but the server responded with a status code
            message.error(err.message,[4])
          } else if(err.response){
          
            message.error(err.response.data,[4])
          }
          else if (err.request) {
            // The request was made but no response was received
          
            message.error(err.message,[4])
          } else {
            // Something else happened while setting up the request
            message.error(err.message,[4])
          }
    }

)

export default AdminaxiosInstance