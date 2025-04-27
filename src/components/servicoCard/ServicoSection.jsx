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
            {typeof selectedServico.text === "string" ? (
              <p>{selectedServico.text}</p>
            ) : Array.isArray(selectedServico.text) ? (
              selectedServico.text.map((item, index) => (
                <div key={index}>
                  <p>{item.subText}</p>
                  <ul>
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : null}
          </>
        )}
      </Popup>
    </div>
  );
};

export default ServicoSection;
