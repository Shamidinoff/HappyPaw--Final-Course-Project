/* import "../../pages/main/main.css"; */
import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-flex">
          <div className="header-flex-logo">
            <div
              className={isOpen ? "close-menu" : "burger-menu"}
              onClick={toggleMenu}
            ></div>
            <a href="#">
              <img
                className="main-logo"
                src="/images-main/1.0-happy-paws-logo-1.svg"
                alt="happy-paws-logo-1"
              />
            </a>
          </div>
          <div className="header-flex-link">
            <ul>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div
            className={
              isOpen
                ? ["colmenu", "colmenuactive"].join(" ")
                : ["colmenu"].join(" ")
            }
          >
            <ul>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="header-flex-reg">
            <button className="sign-in">Войти</button>
            <button className="log-in">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
