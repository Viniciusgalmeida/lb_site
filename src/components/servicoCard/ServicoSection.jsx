import { useState, useEffect } from "react";
import ServicoCard from "../../components/servicoCard/ServicoCard";
import { servicos } from "./servicoData";

const ServicoSection = () => {
  const [selectedServico, setSelectedServico] = useState(null);

  // Controlar o scroll do body quando o popup está ativo
  useEffect(() => {
    if (selectedServico) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Limpar a classe ao desmontar o componente
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedServico]);

  const handleServicoClick = servico => {
    setSelectedServico(servico);
  };

  const closePopup = () => {
    setSelectedServico(null);
  };

  return (
    <div className="servicoContainer">
      {servicos.map(servico => (
        <ServicoCard
          key={servico.id}
          image={servico.image}
          title={servico.title}
          onClick={() => handleServicoClick(servico)}
        />
      ))}

      {selectedServico && (
        <div className="popupOverlay" onClick={closePopup}>
          <div className="popupContent" onClick={e => e.stopPropagation()}>
            <button className="closeButton" onClick={closePopup}>
              ×
            </button>
            <h2>{selectedServico.title}</h2>
            <p className="popupText">{selectedServico.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicoSection;
