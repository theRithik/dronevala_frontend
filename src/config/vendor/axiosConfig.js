import axios from "axios";
import endpoints from "../config";

const axiosInstance= axios.create({
    baseURL:endpoints.url,
    headers:{
        'Content-Type': 'application/json',
    }
})
// test token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUml0aGlrIiwicm9sZSI6IkFkbWluIiwiaWQiOiIxNjkzNzY3NTgxOTIxIiwiZXhwIjoxNzE4MTgwMzE1LCJpYXQiOjE3MTc1NzU1MTV9.A9K0LAwSje71PrJMGrj1I4iN1P7_48aPWWMGsvOON_o
axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization=localStorage.getItem("vendorToken")
  return config
  },
  error => {
    return Promise.reject(error);
  }
)

axiosInstance.interceptors.response.use(
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

export default axiosInstance