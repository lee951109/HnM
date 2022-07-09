import React from "react";

const Login = () => {
  return (
    <div className="login-area container">
      <form className="login-form">
        <div className="mb-3">
          <label className="form-label">이메일</label>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <label className="form-label">비밀번호</label>
          <input type="password" placeholder="비밀번호" />
        </div>

        <button type="submit" className="login-btn">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
