import { Route, Routes } from 'react-router';
import './App.css';
import Homepage from './components/pages/Homepage';
import LoginForm from './components/auth/LoginForm';
import DeptPage from './components/pages/DeptPage';
// React에서는 태그 만들어서 사용
//  -> 주의: compenent 이름은 대문자로 사용
//  -> 구조: () => () : return 생략 가능
//          () => {} : return 생략 불가능
const App = () => {
  return (
    <>
      <div style = {{height : '100vh'}}>
        <Routes>
          <Route path = '/'      exact = {true} element = {<Homepage />} />
          <Route path = '/login' exact = {true} element = {<LoginForm />} />
          <Route path = '/dept'  exact = {true} element = {<DeptPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
