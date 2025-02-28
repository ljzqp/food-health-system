import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import FoodAnalysis from './FoodAnalysis';
import HealthAdvice from './HealthAdvice';
import KnowledgeGraph from './KnowledgeGraph';
import Register from './Register';
import Login from './Login';
import './App.css'; // 引入样式文件
import backgroundImage from './images/1.png'; // 引入背景图片

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 用户登录状态

  return (
    <Router>
      <div className="app-container">
        <div className="app-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
          {isLoggedIn && (
            <nav className="navbar">
              <Link to="/home">首页</Link>
              <Link to="/food-analysis">食品成分分析</Link>
              <Link to="/health-advice">健康建议系统</Link>
              <Link to="/knowledge-graph">知识图谱</Link>
              <Link to="/" onClick={() => setIsLoggedIn(false)}>退出</Link> {/* 退出登录 */}
            </nav>
          )}
          <div className="content">
            <Routes>
              <Route path="/" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/home" />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
              <Route path="/food-analysis" element={isLoggedIn ? <FoodAnalysis /> : <Navigate to="/" />} />
              <Route path="/health-advice" element={isLoggedIn ? <HealthAdvice /> : <Navigate to="/" />} />
              <Route path="/knowledge-graph" element={isLoggedIn ? <KnowledgeGraph /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
