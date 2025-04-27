import { useState } from "react";
import ServicoCard from "../../components/servicoCard/ServicoCard";
import { servicos } from "./servicoData";
import Popup from "../../components/popup/Popup";

const ServicoSection = () => {
  const [selectedServico, setSelectedServico] = useState(null);

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

      <Popup isOpen={!!selectedServico} onClose={closePopup}>
        {selectedServico && (
          <>
            <h2>{selectedServico.title}</h2>
            <p className="popupText">{selectedServico.text}</p>
          </>
        )}
      </Popup>
    </div>
  );
};

export default ServicoSection;
