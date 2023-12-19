import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login/Login'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Link to="/Home">首页</Link>
        <Routes>
            <Route path="/Home" element={<Home/>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
