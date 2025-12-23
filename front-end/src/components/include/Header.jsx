import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { LogoutGoogle, subscribeAuth } from '../../service/authLogic'

const Header = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false)
  //const [myName, setMyname] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = subscribeAuth((u) => setUser(u))
    // 구독 해체 처리(메무리 누수 방지)
    return () => unsubscribe()
  }, []) // 최초 한번만

  // 로그아웃
  const handleLogout = () => {
    try {
      LogoutGoogle()
    } catch (error) {
      console.error("로그아웃 실패", error)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">

      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/book">도서 검색</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dept">부서 관리</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notice">공지 사항</Link>
          </li>
        </ul>

      {/*로그인, 로그아웃, 로그인한 이메일주소*/}
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              user ? 
              (
                <>      
                <li className="nav-item" id="myEmail">
                  <Link className="nav-link">{user.email} 님.</Link>
                </li>              
                  <li className="nav-item" id="logout">
                  <Link className="nav-link" onClick={handleLogout}>로그아웃</Link>
                </li>
                </>
              )
              :
              (
                <li className="nav-item" id="login">
                  <Link className="nav-link active" to="/login">로그인</Link>
                </li> 
              )
            }
          </ul>
        </div>
        {/*로그인, 로그아웃, 로그인한 이메일주소*/}

      </div> {/*메뉴바*/}

      </nav>
    </>
  )
}

export default Header
