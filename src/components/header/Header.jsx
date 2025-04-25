import React from "react";
import "./header.css";
import logoLucasBatista from "../../assets/lucasBatistaLogo.svg";
import menuHamburger from "../../assets/menuHamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <img
        src={logoLucasBatista}
        className="header-logo"
        alt="Logo de Lucas Batista - Mestre em Arquitetura Hospitalar"
      />
      <nav className="header-nav">
        <button className="header-nav-button">
          <img src={menuHamburger} className={"menuHamburger"} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
