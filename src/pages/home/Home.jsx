/** @jsxImportSource preact */
import { h } from "preact";
// import Header from "../../components/header/Header";

import "../../styles/global.css";
import "./home.css";

import hospitalDesenhoEsquematico from "../../assets/hospitalDesenhoEsquematico.png";
import lucasBatistaArq from "../../assets/lucas_batista_arq.png";

const Home = () => {
  return (
    <>
      <div class={"blueSquare"}>
        <h1>
          LUCAS <br /> BATISTA
        </h1>
        <p class={"subtitle"}>Mestre em Arq. Hospitalar</p>
        <img
          src={hospitalDesenhoEsquematico}
          class={"lucas_batista_logo"}
          alt="Logo de Lucas Batista - Mestre em Arquitetura Hospitalar"
        />
      </div>
      <img src={lucasBatistaArq} class={"lucasBatistaFoto"} />
    </>
  );
};

export default Home;
