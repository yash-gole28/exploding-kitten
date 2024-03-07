import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { AuthContext } from './context/AuthContext'
import Navbar from './Navbar'

const Login = () => {
  const navigate = useNavigate()
  const { Login } = useContext(AuthContext)
  const [userData, setUserData] = useState({ email: '', password: '' })
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  const sendDataToBackend = async (event) => {
    event.preventDefault()
    try {
      if (userData.email && userData.password) {
        const response = await axios.post("https://exploding-kitten-1.onrender.com/api/v1/auth/login", { userData })
        if (response.data.success) {
          localStorage.setItem('my-token', JSON.stringify(response.data.token))
          localStorage.setItem('game-data', JSON.stringify(response.data.user.gameswon))
          Login(response.data.user)
          // console.log(response.data.user)
          navigate('/')
          toast.success(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
  }, [])

  return (
    <div>
      <Navbar />
      <div className='form'>

        <div class="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleChange} />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating" style={{ marginBottom: "20px" }}>
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} />
          <label for="floatingPassword">Password</label>
        </div>
        <input className="btn btn-primary button" onClick={sendDataToBackend} type="submit" value="login" />
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
      {/* <h4>create account</h4> */}
      {/* <button onClick={()=>{navigate('/register')}}>click here</button> */}
      <button onClick={()=>{navigate('/register')}} type="button" class="btn btn-info">create Account</button>
      </div>
    </div>
  )
}

export default Login
