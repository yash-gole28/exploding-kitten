import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from './Navbar'

const Register = () => {
  const navigate = useNavigate()
  const [userData , setUserData] = useState({username:"", email:"",password:""})
  const handleChange = (event)=>{
      setUserData({...userData,[event.target.name]:event.target.value})
      console.log(userData)
  }

  const handleSubmit = async (event)=>{
      event.preventDefault()
      try{
          const response = await axios.post("https://exploding-kitten-1.onrender.com/api/v1/auth/register",{userData})
          if(response.data.success){
              toast.success('successfully registered')
              setUserData({username:"", email:"",password:""})
              navigate('/login')
          }
      }catch(error){
          toast.error(error.response.data.message)
          console.log(error)
      }
  }
  return (
    <div>
      <Navbar/>
      <div className='form'>

        <div class="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="username" onChange={handleChange} />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleChange} />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating" style={{ marginBottom: "20px" }}>
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} />
          <label for="floatingPassword">Password</label>
        </div>
        <input className="btn btn-primary button" onClick={handleSubmit} type="submit" value="login" />
      </div>
    </div>
    
  )
}

export default Register
