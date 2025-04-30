import "../../styles/global.css";
import "./home.css";

import hospitalDesenhoEsquematico from "../../assets/hospitalDesenhoEsquematico.png";
import lucasBatistaArq from "../../assets/lucas_batista_arq.png";
import Header from "../../components/header/Header";
import ServicoSection from "../../components/servicoCard/ServicoSection";
import ExperienciasSection from "../../components/experiencias/ExperienciasSection";
import LivroSection from "../../components/livro/LivroSection";
import ContatoSection from "../../components/contato/ContatoSection";
// import Footer from "../../components/footer/Footer";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../../components/scrollToTop/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <div class={"blueSquare"}>
        <div class={"containerBlueSquare"}>
          <h1>
            LUCAS <br /> BATISTA
          </h1>
          <p class={"subtitle"}>Mestre em Arq. Hospitalar</p>
        </div>
        <img
          src={hospitalDesenhoEsquematico}
          class={"lucas_batista_logo"}
          alt="Logo de Lucas Batista - Mestre em Arquitetura Hospitalar"
        />
      </div>
      <img
        src={hospitalDesenhoEsquematico}
        class={"lucas_batista_logo_tablet"}
        alt="Logo de Lucas Batista - Mestre em Arquitetura Hospitalar"
      />
      <img src={lucasBatistaArq} class={"lucasBatistaFoto"} />
      <h3 id="servicos">
        Serviços <br /> Oferecidos
      </h3>
      <ServicoSection />
      <h3 id="experiencias">Experiências</h3>
      <ExperienciasSection />
      <h3 id="livro">Livro</h3>
      <LivroSection />
      <div id="contato">
        <ContatoSection />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
