import jwt from "jsonwebtoken"
export const tokenexpiry = async({token}:any)=>{
    try {
        const decodedToken =await jwt.decode(token);
        if(!decodedToken)
        {
            return true ;
        }
        const currentTime = Math.floor(Date.now()/1000);
        if(decodedToken.exp && decodedToken.exp<currentTime){
            return true ;
        }
        return false ;
    } catch (error:any) {
        console.log("Error encountered :",error);
        return true ;
    }
}