import bcrypt from 'bcrypt'
import  Jwt  from "jsonwebtoken"
import UserModal from '../Models/User.model.js'

export const Register = async(req , res)=>{
    try{
        const {email , username , password} = req.body.userData

        if(!username || !email || !password)return res.status(400).json({success :false , message:'all fields required'})

        const hashedPassword =await bcrypt.hash(password , 10)
        
        const user = new UserModal ({
            username , email ,
             password : hashedPassword
        })

        await user.save()

        return res.status(200).json({success:true , message:"registration successful",user})


    } catch(error){
    console.log(error)
    return res.status(500).json({success:false, message:error})
   }
}
 
export const Login = async(req , res)=>{
    try{
     const {email , password }=req.body.userData 
 
     if(!email || !password)return res.status(400).json({success :false , message:'email password required'})
     const user = await UserModal.findOne({email})
     if (!user) return res.status(401).json({ success: false, message: "invalid email" })
 
 
     const checkUser =await bcrypt.compare(password , user.password)
     if(!checkUser)return res.status(400).json({success :false , message:'incorrect password'})
 
     const token =await Jwt.sign({id:user._id},process.env.JWT_SECRET )
    //  console.log(token)
 
    if(checkUser){
     return res.status(200).json({success:true , message:"login successful",user : {username :user.username , id : user._id,gameswon:user.gameswon},token})
    }
    }
    catch(error){
     console.log(error)
     return res.status(500).json({success:true , message:error})
    }
 }  

 export const CurrentUser = async (req , res)=>{
    try{
        const {token} = req.body
        if(!token)return res.status(404).json({success:false , message:"token not found"})
        const {id} = await Jwt.verify(token , process.env.JWT_SECRET)
        const user = await UserModal.findById(id)
        // console.log(user)
        if(!user)return res.status(404).json({success:false , message:"user not found"})
        
        return res.status(200).json({success:true , message:"user found", user:{id:user._id , name:user.username,gameswon : user.gameswon , type:user.type}})
     
    } catch(error){
            console.log(error)
            return res.status(500).json({success:false , message:"current user not found"})
           }
    }  