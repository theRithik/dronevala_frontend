import AdminaxiosInstance from "../adminConfig"
import axiosInstance from "./axiosConfig"
import vendoraxiosInstance from "./vendoraxiosConfig"

export const GetData=async(data)=>{
    try{
        console.log(data)
        const response = await axiosInstance.get(`${data.endpoint}`)
        return response?.data
    }
    catch (err){
        throw err

    }
}

export const PostData =async(data)=>{
    try{
        console.log(data)
        const response = await axiosInstance.post(`${data.endpoint}`,data)
        return response?.data
    }
    catch (err) {
        throw err
    }

}

export const PutData = async(data)=>{
    try{
        const response = await axiosInstance.put(`${data.endpoint}`,data)
        return response?.data
    }
    catch(err){
        throw err
    }
}


export const VGetData=async(data)=>{
    try{
        console.log(data)
        const response = await vendoraxiosInstance.get(`${data.endpoint}`)
        return response?.data
    }
    catch (err){
        throw err

    }
}

export const VPostData =async(data)=>{
    try{
        console.log(data)
        const response = await vendoraxiosInstance.post(`${data.endpoint}`,data)
        return response?.data
    }
    catch (err) {
        throw err
    }

}

export const VPutData = async(data)=>{
    try{
        const response = await vendoraxiosInstance.put(`${data.endpoint}`,data)
        return response?.data
    }
    catch(err){
        throw err
    }
}


export const AGetData=async(data)=>{
    try{
        console.log(data)
        const response = await AdminaxiosInstance.get(`${data.endpoint}`)
        return response?.data
    }
    catch (err){
        throw err

    }
}

export const APostData =async(data)=>{
    try{
        console.log(data)
        const response = await AdminaxiosInstance.post(`${data.endpoint}`,data)
        return response?.data
    }
    catch (err) {
        throw err
    }

}

export const APutData = async(data)=>{
    try{
        const response = await AdminaxiosInstance.put(`${data.endpoint}`,data)
        return response?.data
    }
    catch(err){
        throw err
    }
}