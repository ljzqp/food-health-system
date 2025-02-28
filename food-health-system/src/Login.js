import React, { useState } from 'react';
import './Auth.css'; // 引入样式文件
import { Link, useNavigate } from 'react-router-dom'; // 引入 Link 和 useNavigate

function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // 使用 useNavigate 钩子

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('登录成功！');
                setIsLoggedIn(true); // 更新登录状态
                navigate('/home'); // 使用 navigate 替代 window.location.href
            } else {
                setError(data.message || '登录失败，请重试');
            }
        } catch (err) {
            console.error('登录错误:', err);
            setError('无法连接到服务器，请检查网络连接');
        }
    };

    return (
        <div className="auth-container">
            <h1>用户登录</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">登录</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <p>还没有账号？<Link to="/register">注册</Link></p> {/* 提示用户注册 */}
        </div>
    );
}

export default Login; 