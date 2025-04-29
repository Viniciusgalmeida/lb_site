import "./servicoCard.css";
import "../../styles/global.css";
import openIcon from "../../assets/openIcon.svg"; // <- importe o ícone

const ServicoCard = ({ image, title, onClick }) => {
  return (
    <div className="servicoCardContainer">
      <button className="servicoCard" onClick={onClick}>
        <img src={openIcon} alt="Abrir" className="openIcon" />{" "}
        {/* <- ícone no canto */}
        <img
          src={image}
          className="servicoCardImage"
          alt={`Ícone de ${title}`}
        />
        <p className="servicoCardText">{title}</p>
      </button>
    </div>
  );
};

export default ServicoCard;
