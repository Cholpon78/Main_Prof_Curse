import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import cart from "../../assets/bag.svg";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";

export default function Header() {
  const [nav, setNav] = useState(false);

  const closeNav = () => setNav(false);

  return (
    <header className="container">
      <div className={`${s.header_container}`}>
        <Link to="/">
          <img className={s.logo} src={logo} alt="logo" />
        </Link>
        <div className={`${s.nav_menu} ${nav && s.nav_menu_open}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeNav}>
                Main Page
              </Link>
            </li>
            <li>
              <Link to="/categories" onClick={closeNav}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={closeNav}>
                All products
              </Link>
            </li>
            <li>
              <Link to="/categories/sales" onClick={closeNav}>
                All sales
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <img className={s.img_cart} src={cart} alt="cart" />
        </Link>

        <div onClick={() => setNav(!nav)} className={s.burger_btn}>
          {nav ? <Close size={40} /> : <Menu size={40} />}
        </div>
      </div>
    </header>
  );
}
