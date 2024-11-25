import jwt from "jsonwebtoken"
export const verifyToken=async(token:any)=>{
    try {
        const decoded = await jwt.verify(token.value,process.env.TOKEN_SECRET);
        return {
            valid:true ,
            decoded
        }
    } catch(error:any){
        return {valid: false, error:error.message};
    }
}