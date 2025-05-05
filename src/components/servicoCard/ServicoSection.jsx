import { useState } from "react";
import ServicoCard from "../../components/servicoCard/ServicoCard";
import { servicos } from "./servicoData";
import Popup from "../../components/popup/Popup";
import whatsappLogo from "../../assets/whatsappLogo.png";
import "./servicoCard.css";

const ServicoSection = () => {
  const [selectedServico, setSelectedServico] = useState(null);

  const handleServicoClick = servico => {
    setSelectedServico(servico);
  };

  const closePopup = () => {
    setSelectedServico(null);
  };

  // Defina a URL do WhatsApp fora do JSX para clareza (opcional)
  const whatsappUrl =
    "https://wa.me/553189022905?text=Ol%C3%A1%2C%20Lucas%20Batista.";

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

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <img
                src={whatsappLogo}
                className="iconStyle"
                alt="Ícone do WhatsApp"
                loading="lazy"
              />

              <span>Mais informações pelo WhatsApp</span>
            </a>
          </>
        )}
      </Popup>
    </div>
  );
};

export default ServicoSection;
