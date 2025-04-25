import "./experienciasCard.css";
import "../../styles/global.css";

const ExperienciasCard = ({ image, title, onClick }) => {
  return (
    <div className="experienciasCardContainer">
      <button
        className="experienciasCard"
        onClick={onClick}
        src={image}
        alt={`Ícone de ${title}`}
      >
        <p className="experienciasCardText">{title}</p>
      </button>
    </div>
  );
};

export default ExperienciasCard;
