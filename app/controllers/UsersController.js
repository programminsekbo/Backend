


export const Login=async(req,res)=>{
    try {
       
            return res.json({status:"susscess","Message":"User not found"})
        } 
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

