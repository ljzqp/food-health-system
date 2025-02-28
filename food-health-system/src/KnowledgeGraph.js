import React, { useState } from 'react';

function KnowledgeGraph() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // 模拟检索知识图谱
    const mockResults = [
      { name: '苹果', nutrients: '维生素C, 纤维' },
      { name: '香蕉', nutrients: '钾, 维生素B6' }
    ];
    
    setResults(mockResults);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>食品营养知识图谱</h1>
      <input type="text" placeholder="输入食品名称" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch} style={{ margin: '10px' }}>搜索</button>
      <div>
        {results.map((item, index) => (
          <div key={index} style={{ marginTop: '10px' }}>
            <h2>{item.name}</h2>
            <p>营养成分：{item.nutrients}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnowledgeGraph; 