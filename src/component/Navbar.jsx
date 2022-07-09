import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
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
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon size="lg" icon={faUser} />
          <div className="login-text">
            <Link to="/login">로그인</Link>
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
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon className="search" icon={faSearch} />
          <input type="text" placeholder="제품 검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
