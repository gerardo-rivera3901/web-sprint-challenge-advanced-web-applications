import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const initialState = {
  username: '',
  password: ''
}

const Login = () => {
  const [loginData, setLoginData] = useState(initialState)
  const { push } = useHistory()

  const onChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:5000/api/login', loginData)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        push('/protected')
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Welcome to the Bubble App!</h1>
        <input 
          type='text'
          name='username'
          placeholder='Enter Your Username'
          value={loginData.username}
          onChange={onChange}
        />
        <input 
          type='password'
          name='password'
          placeholder='Enter Your Password'
          value={loginData.password}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
