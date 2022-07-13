import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ auth, setAuth }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const goToLogin = () => {
    if (auth === false) {
      navigate("/login");
    } else {
      setAuth(false);
    }
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <butto className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </butto>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            onClick={() => setWidth(250)}
          />
        </div>
      </div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon size="lg" icon={faUser} />
          <div className="login-text">
            {auth === false ? "로그인" : "로그아웃"}
          </div>
        </div>
      </div>

      <div className="nav-logo">
        <Link to="/">
          <img
            width={200}
            src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/3e17273b-330d-4466-b158-d302aaa27d43"
          />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon className="search" icon={faSearch} />
          <input
            type="text"
            placeholder="제품 검색"
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
