import axios from "axios";
import endpoints from "../config";
import { message } from "antd";

const vendoraxiosInstance= axios.create({
    baseURL:endpoints.url,
    headers:{
        'Content-Type': 'application/json',
    }
})
// test token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUml0aGlrIiwicm9sZSI6IkFkbWluIiwiaWQiOiIxNjkzNzY3NTgxOTIxIiwiZXhwIjoxNzE4MTgwMzE1LCJpYXQiOjE3MTc1NzU1MTV9.A9K0LAwSje71PrJMGrj1I4iN1P7_48aPWWMGsvOON_o
vendoraxiosInstance.interceptors.request.use(
  config => {
    config.headers.vtoken=localStorage.getItem("vtoken")
  return config
  },
  error => {
    return Promise.reject(error);
  }
)

vendoraxiosInstance.interceptors.response.use(
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

export default vendoraxiosInstance