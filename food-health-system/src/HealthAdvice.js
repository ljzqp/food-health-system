import React, { useState } from 'react';

function HealthAdvice() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [history, setHistory] = useState('');
  const [advice, setAdvice] = useState('');

  const handleSubmit = () => {
    // 模拟生成个性化建议
    const mockAdvice = '多吃水果和蔬菜，保持均衡饮食。';
    setAdvice(mockAdvice);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>健康建议系统</h1>
      <input type="text" placeholder="体重" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input type="text" placeholder="身高" value={height} onChange={(e) => setHeight(e.target.value)} />
      <input type="text" placeholder="年龄" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="疾病史" value={history} onChange={(e) => setHistory(e.target.value)} />
      <button onClick={handleSubmit} style={{ margin: '10px' }}>提交</button>
      {advice && <p>建议：{advice}</p>}
    </div>
  );
}

export default HealthAdvice; 