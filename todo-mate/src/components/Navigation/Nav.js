import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export const Nav = () => {
  return (
    <div className="navContainer">
      <Link className="navLink" to="/">📝</Link>
      <Link className="navLink" to="mypage">💭</Link>
    </div>
  );
};

export default Nav;
