import React, { useState } from 'react';
import './Auth.css'; // 引入样式文件
import { Link } from 'react-router-dom'; // 引入 Link

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('男');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [dietType, setDietType] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('密码不匹配');
            return;
        }

        const response = await fetch('http://localhost:5000/api/register', { // 确保 URL 正确
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            setSuccess('注册成功！');
        } else {
            setError('注册失败，请重试');
        }
    };

    return (
        <div className="auth-container">
            <h1>用户注册</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="用户名" onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="密码" onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="确认密码" onChange={(e) => setConfirmPassword(e.target.value)} required />
                <input type="text" placeholder="姓名" onChange={(e) => setName(e.target.value)} required />
                <select onChange={(e) => setGender(e.target.value)} value={gender}>
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
                <input type="number" placeholder="身高（cm）" onChange={(e) => setHeight(e.target.value)} required />
                <input type="number" placeholder="体重（kg）" onChange={(e) => setWeight(e.target.value)} required />
                <input type="text" placeholder="饮食类型" onChange={(e) => setDietType(e.target.value)} required />
                <button type="submit">注册</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <p>已有账号？<Link to="/">登录</Link></p> {/* 提示用户登录 */}
        </div>
    );
}

export default Register; 