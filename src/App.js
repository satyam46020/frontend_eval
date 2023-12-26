import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Signup } from './components/signup';
import { Login } from './components/Login';
import { Notice } from './components/Notice';
function App() {
  return (
    <div className="App">
      <h1>Notice Board</h1>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/notice" element={<Notice/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
