// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';
import {HomePage} from './components/HomePage';
import { useState, useEffect } from 'react';

function App() {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setAuth(true);
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isAuth ? <HomePage /> : <LoginPage />}/>
        <Route path='/signup' element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
