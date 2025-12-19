import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthLogic from './service/authLogic'
import app from './service/firebase';

const authLogic = new AuthLogic(app);
console.log(authLogic);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

