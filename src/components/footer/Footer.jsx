import "./footer.css";

import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p style={{ fontSize: "0.8rem", color: "#888" }}>
        © {currentYear}{" "}
        <a
          href="https://viniciusgalmeida.github.io/Portfolio-Vinicius/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          Vinícius Almeida
        </a>
      </p>
    </footer>
  );
}

export default Footer;
