import AwsAxios from "./awsaxios"

export const PostImage =async(data)=>{
try{
    const response = await AwsAxios.post('/',data)
    return response.data
}
catch(err){
    throw err
}
}