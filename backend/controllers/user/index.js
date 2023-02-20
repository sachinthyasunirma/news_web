
const userModel = require('../../models/user/user.model');

const getUserData = async (req,res)=>{
    try{
        const{
            _id
        }=req.params
        const user = await userModel.findById(_id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        return res.status(200).json({
            data:user,
            message:"success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}
const updateUser = async (req,res)=>{
    const{
        _id
    }=req.params
    const{
        userNewUpdates
    }=req.body
    const userupdate = await userModel.findByIdAndUpdate({_id},{$set:{userNewUpdates}},{new:true})
    return res.status(200).json({
        data:userupdate,
        message:"success"
    })
}
module.exports = {
    getUserData,
    updateUser
}