import "./servicoCard.css";
import "../../styles/global.css";

const ServicoCard = ({ image, title, onClick }) => {
  return (
    <div className="servicoCardContainer">
      <button className="servicoCard" onClick={onClick}>
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
