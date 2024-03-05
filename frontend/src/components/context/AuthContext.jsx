import { createContext, useEffect, useReducer, useState } from "react";
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext()

const ParentAuthContext = ({children})=>{

    const [start , setStart] = useState(false)

    const navigate = useNavigate()

    const initialState = {user : null}
    
    const reducer = (state , action)=>{
        switch(action.type){
            case "LOGIN" :
                return {...state , user:action.payload}

            case "LOGOUT" :
                return{state , user:null}

            default:
                return {state}
        }
    }

    const [state , dispatch] = useReducer(reducer , initialState)

    const Login = (data)=>{
        dispatch({type:"LOGIN",payload:data})
       

    }

    const Logout =()=>{
        dispatch({type:"LOGOUT"})
        localStorage.removeItem("my-token")
        localStorage.removeItem("game-data")
        navigate('/')
        toast.success('Logged out')
    }

    useEffect(()=>{
     async  function currentUser(){
        try{
            const response = await axios.post('http://localhost:8000/api/v1/auth/currentUser',{token})
            if(response.data.success){
                Login(response.data.user)
            
            localStorage.setItem('game-data', JSON.stringify({won:response.data.user.gameswon,id:response.data.user.id}))
                // console.log(response.data.user)
            }
        }catch(error){
            toast.error(error.response.data.message)
            console.log(error)
        }
    }
       
        const token = JSON.parse(localStorage.getItem("my-token"))
        // console.log(token)
        if(token){
            currentUser()
        }
    },[])

    return(
        <AuthContext.Provider value={{state , Login , Logout ,start , setStart}}>
            {children}
        </AuthContext.Provider>
    )
}

export default ParentAuthContext