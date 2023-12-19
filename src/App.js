import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login/Login'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Link to="/home">首页</Link>
        <br />
        <Link to="/login">登录</Link>
        <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
