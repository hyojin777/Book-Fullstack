import React from 'react'
import { LoginGoogle } from '../../service/authLogic'
import { useNavigate } from 'react-router'

const LoginForm = () => {
  //페이지 이동(라우팅)
  const navigate = useNavigate()

  const handleLogin = () => {
    LoginGoogle()
    navigate("/")
  }

  return (
    <>
      <h2>로그인 화면</h2>
      <button type = 'button' onClick = {handleLogin}>구글로그인</button>
    </>
  )
}

export default LoginForm
