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
      <div className="textButtonLivroSection">
        <p className="textLivroSection">
          Trabalho final do mestrado desenvolvido em Barcelona, sob orientação
          do escritório de arquitetura Mario Corea, tese em forma de livro cujo
          tema é Hospital de Emergência para Região Metropolitana de Belo
          Horizonte.
        </p>
        <StandardButton
          href="/Hospital_de_Emergencias_para_la_Region_Metropolitana_de_Belo_Horizonte.pdf"
          download
        >
          Baixar livro em PDF
        </StandardButton>
      </div>
    </div>
  );
}

export default LivroSection;
