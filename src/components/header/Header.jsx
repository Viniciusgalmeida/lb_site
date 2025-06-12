import React, { useState } from "react";
import "./header.css";
import logoLucasBatista from "../../assets/lucasBatistaLogo.svg";
import menuHamburger from "../../assets/menuHamburger.svg";
import menuHamburgerBlue from "../../assets/menuHamburgerBlue.svg";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <>
      <header className="header">
        <a href="/">
          <img
            src={logoLucasBatista}
            className="header-logo"
            alt="Logo de Lucas Batista - Especialista em Arquitetura Hospitalar"
          />
        </a>
        <nav className="header-nav">
          <button className="header-nav-button" onClick={toggleMenu}>
            <img
              src={menuHamburger}
              className="menuHamburger"
              alt="Abrir menu"
            />
            <img
              src={menuHamburgerBlue}
              className="menuHamburgerblue"
              alt="Abrir menu"
            />
          </button>
          <ul className="menuContainerText">
            <li>
              <a href="#servicos" className="menuText">
                Serviços
              </a>
            </li>
            <li>
              <a href="#experiencias" className="menuText">
                Experiências
              </a>
            </li>
            <li>
              <a href="#livro" className="menuText">
                Livro
              </a>
            </li>
            <li>
              <a href="#contato" className="menuText">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {menuAberto && (
        <div className="menu-popup">
          <button className="fechar-menu" onClick={fecharMenu}>
            ×
          </button>
          <ul className="menu-links">
            <li>
              <a href="#servicos" onClick={fecharMenu}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#experiencias" onClick={fecharMenu}>
                Experiências
              </a>
            </li>
            <li>
              <a href="#livro" onClick={fecharMenu}>
                Livro
              </a>
            </li>
            <li>
              <a href="#contato" onClick={fecharMenu}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
