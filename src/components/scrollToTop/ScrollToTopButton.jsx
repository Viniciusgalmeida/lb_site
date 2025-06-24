import React, { useState, useEffect } from "react";
import { route } from "preact-router";
import "./scrollToTopButton.css";
import buttonToTopIcon from "../../assets/buttonToTop.svg"; // Importação do ícone

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const hasScrolledPastOneScreen = window.scrollY > window.innerHeight / 3;
      setIsVisible(hasScrolledPastOneScreen);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    route('/');
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <img
          src={buttonToTopIcon}
          alt="Voltar ao topo"
          className="scroll-icon"
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
