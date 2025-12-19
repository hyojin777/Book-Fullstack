import './App.css';
// React에서는 태그 만들어서 사용
//  -> 주의: compenent 이름은 대문자로 사용
//  -> 구조: () => () : return 생략 가능
//          () => {} : return 생략 불가능
const App = () => {
  return (
    <div className="App">
      Hello React!!!
    </div>
  );
}

export default App;
