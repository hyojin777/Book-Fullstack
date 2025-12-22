import React from 'react'
import { LoginGoogle } from '../../service/authLogic'

const LoginForm = () => {
  const handleLogin = () => {
    LoginGoogle()
  }

  return (
    <>
      <h2>로그인 화면</h2>
      <button type = 'button' onClick = {handleLogin}>구글로그인</button>
    </>
  )
}

export default LoginForm
