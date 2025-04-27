import Popup from "../popup/Popup";
import ExperienciasCard from "./ExperienciasCard";
import { experiencias } from "./experienciasData";

const ExperienciasSection = () => {
  const handleCardClick = title => {
    console.log(`Clicou na experiência: ${title}`);
  };

  return (
    <div className="experienciasSection">
      {experiencias.map(experiencia => (
        <ExperienciasCard
          key={experiencia.id}
          image={experiencia.image}
          title={experiencia.title}
          onClick={() => handleCardClick(experiencia.title)}
        />
      ))}

      <Popup></Popup>
    </div>
  );
};
export default ExperienciasSection;
