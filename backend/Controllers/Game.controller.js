import UserModel from "../Models/User.model.js"

export const AddWin = async (req , res) => {
    try{
        const {id ,win} = req.body
        console.log(id)
        let wins = parseInt( win + 1)
        // console.log(wins)
        const data = await UserModel.findByIdAndUpdate(id,{gameswon:wins})
        if(data){
            console.log(data.gameswon)
            return res.status(200).json({success : true,message:"success"})
        }
        return res.status(404).json({success :false ,message:"fail"})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:true , message:error})
    }
}