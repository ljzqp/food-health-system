from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 模拟用户数据库
users = {}

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    name = data.get('name')
    gender = data.get('gender')
    height = data.get('height')
    weight = data.get('weight')
    dietType = data.get('dietType')

    if username in users:
        return jsonify({'message': '用户已存在'}), 400

    # 保存用户信息
    users[username] = {
        'password': password,
        'name': name,
        'gender': gender,
        'height': height,
        'weight': weight,
        'dietType': dietType
    }

    return jsonify({'message': '注册成功'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = users.get(username)
    if user and user['password'] == password:
        return jsonify({'message': '登录成功'}), 200
    else:
        return jsonify({'message': '用户名或密码错误'}), 401

if __name__ == '__main__':
    app.run(debug=True)