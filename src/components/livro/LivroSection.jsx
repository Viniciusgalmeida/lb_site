import StandardButton from "../standardButton/StandardButton";
import "./livro.css";
import livroImage from "../../assets/hospitalArchitectureBook.png";

function LivroSection() {
  return (
    <div className="containerLivroSection">
      <img
        src={livroImage}
        className="imageLivroSection"
        alt="Imagem de livro com um hospital na capa"
      />
      <p className="textLivroSection">
        Trabalho final do mestrado desenvolvido em Barcelona, sob orientação do
        escritório de arquitetura Mario Corea, tese em forma de livro cujo tema
        é Hospital de Emergência para Região Metropolitana de Belo Horizonte.
      </p>
      <StandardButton href="https://drive.google.com/file/d/14yY341VE1xXrtyPWSkpgcedWdGTFmYEL/view">
        Visualizar livro para donwload
      </StandardButton>
    </div>
  );
}

export default LivroSection;
