import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../redux/actions/authAction";

const Login = ({ setAuth }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault(); // submit의 refresh를 막는다.
    dispatch(authAction.login(id, password));
    setAuth(true);
    navigate("/");
  };

  return (
    <div className="login-area container">
      <form className="login-form" onSubmit={(e) => loginUser(e)}>
        <div className="mb-3">
          <label className="form-label">이메일</label>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
