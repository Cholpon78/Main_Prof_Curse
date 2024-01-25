import React from "react";
import logo from "../../assets/logo.svg";
import cart from "../../assets/bag.svg";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
      <div className={`${s.header_container}`}>
        <Link to="/">
          <img className={s.logo} src={logo} alt="logo" />
        </Link>
        <div className={s.nav_menu}>
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              {" "}
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              {" "}
              <Link to="/products">All products</Link>
            </li>
            <li>
              <Link to="/categories/:sales">All sales</Link>
            </li>
          </ul>
        </div>

        <Link to="/cart">
          <img className={s.img_cart} src={cart} alt="cart" />
        </Link>
      </div>
    </header>
  );
}
