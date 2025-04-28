import "./livro.css";

function LivroSection() {
  return (
    <div className="containerLivroSection">
      <img
        src={"src/assets/hospitalArchitectureBook.png"}
        className="imageLivroSection"
      />
      <p className="textLivroSection">
        Trabalho final do mestrado desenvolvido em Barcelona, sob orientação do
        escritório de arquitetura Mario Corea, tese em forma de livro cujo tema
        é Hospital de Emergência para Região Metropolitana de Belo Horizonte.
      </p>
      <button className="buttonLivroSection">
        Visualizar livro para donwload
      </button>
    </div>
  );
}

export default LivroSection;
