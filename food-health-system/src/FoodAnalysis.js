import React, { useState } from 'react';

function FoodAnalysis() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      setError('请上传一张食品配料表图片');
      return;
    }

    setLoading(true);
    setError('');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', { // 替换为您的 API 端点
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY', // 替换为您的 API 密钥
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('网络响应不正常');
      }

      const data = await response.json();
      setResult(data); // 假设返回的数据格式符合您的需求
    } catch (err) {
      setError('分析失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>食品成分分析</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} disabled={loading} style={{ margin: '10px' }}>
        {loading ? '分析中...' : '上传并分析'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>分析结果：</h2>
          <p>蛋白质：{result.protein}</p>
          <p>脂肪：{result.fat}</p>
          <p>碳水化合物：{result.carbohydrates}</p>
          <p>维生素：{result.vitamins}</p>
          <p>矿物质：{result.minerals}</p>
        </div>
      )}
    </div>
  );
}

export default FoodAnalysis; 