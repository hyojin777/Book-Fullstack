import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase";
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
/*
class AuthLogic {//클래스 선언
  constructor() {
    this.auth = getAuth();//firebase developer console신청한 프로젝트 설정정보확인
    this.googleProvider = new GoogleAuthProvider();//구글인증, 카카오인증, 깃헙인증
    //this.kakaoProvider = new KakaoAuthProvider();
    //this.githubProvider = new GihubAuthProvider();
  }
  //auth반환하는 함수 선언
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;//google
  };
}
export default AuthLogic; //외부 js에서 사용할 때
*/

// *******************************************

/*
  인증 처리/인가 처리
  Front : React(LocalStorage 활용 -> OAuth 토큰 방식)
  Back  : Servlet(쿠키, 세션 제공)
*/

/*
  구글 로그인 
*/
export const LoginGoogle = async() => {
  try {
    // signInWithPopup(인증객체, 로그인제공자): Firebase 인증 함수
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user;
    window.localStorage.setItem("uid", user.uid);
    window.localStorage.setItem("email", user.email);
    return user
  } catch (error) {
    console.log("Google Login Fail");
    throw error;
  }
}

/*
  구글 로그아웃
*/

/*
  구글 인증 상태 변화 감지
*/
