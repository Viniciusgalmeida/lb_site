import { useState } from "react";
import Popup from "../popup/Popup";
import ExperienciasCard from "./ExperienciasCard";
import { experiencias } from "./experienciasData";

const ExperienciasSection = () => {
  const [selectedExperiencia, setSelectedExperiencia] = useState(null);

  const handleCardClick = experiencia => {
    setSelectedExperiencia(experiencia);
  };

  const closePopup = () => {
    setSelectedExperiencia(null);
  };

  return (
    <div className="experienciasSection">
      {experiencias.map(experiencia => (
        <ExperienciasCard
          key={experiencia.id}
          image={experiencia.image}
          title={experiencia.title}
          onClick={() => handleCardClick(experiencia)}
        />
      ))}

      <Popup isOpen={!!selectedExperiencia} onClose={closePopup}>
        {selectedExperiencia && (
          <>
            <h2>{selectedExperiencia.title}</h2>
            {/* Texto como string */}
            {typeof selectedExperiencia.text === "string" && (
              <p>{selectedExperiencia.text}</p>
            )}
            {/* Texto como array de seções */}
            {Array.isArray(selectedExperiencia.text) &&
              selectedExperiencia.text.map((item, index) => (
                <div key={index}>
                  <p>{item.subText}</p>
                  <ul>
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            {/* Texto como objeto único */}

            {selectedExperiencia.image && (
              <img
                src={selectedExperiencia.image}
                alt={selectedExperiencia.title}
                className="experienciasImage"
              />
            )}

            {selectedExperiencia.text &&
              typeof selectedExperiencia.text === "object" &&
              !Array.isArray(selectedExperiencia.text) &&
              selectedExperiencia.text.subText && (
                <>
                  <p>{selectedExperiencia.text.subText}</p>
                  <ul>
                    {selectedExperiencia.text.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </>
              )}
            {typeof selectedExperiencia.link === "string" && (
              <a
                href={selectedExperiencia.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />
                Instagram do arquiteto Mario Corea
              </a>
            )}
          </>
        )}
      </Popup>
    </div>
  );
};

export default ExperienciasSection;
