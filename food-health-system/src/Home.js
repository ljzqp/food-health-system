import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // 引入样式文件

function Home() {
  return (
    <div className="home-container">
      <h1>欢迎来到食品健康系统</h1>
      <p>在这里，您可以进行食品成分分析、获取健康建议，以及查看相关知识图谱。</p>
      <div className="module">
        <h2>功能模块</h2>
        <div className="module-links">
          <Link to="/food-analysis">食品成分分析</Link>
          <Link to="/health-advice">健康建议系统</Link>
          <Link to="/knowledge-graph">知识图谱</Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 