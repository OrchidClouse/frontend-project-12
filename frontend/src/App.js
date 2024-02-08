// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { LoginPage } from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
