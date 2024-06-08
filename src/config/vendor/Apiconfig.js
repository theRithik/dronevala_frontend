import axiosInstance from "./axiosConfig"


export const GetData=async(data)=>{
    try{
        const response = await axiosInstance.get(`${data.endpoint}`)
        return response.data
    }
    catch (err){
        throw err

    }
}

export const PostData =async(data)=>{
    try{
        console.log(data)
        const response = await axiosInstance.post(`${data.endpoint}`,data)
        return response.data
    }
    catch (err) {
        throw err
    }

}