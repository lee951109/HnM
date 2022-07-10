import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault(); // submit의 refresh를 막는다.
    console.log("login user function error");
    setAuth(true);
    navigate("/");
  };

  return (
    <div className="login-area container">
      <form className="login-form" onSubmit={(e) => loginUser(e)}>
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
