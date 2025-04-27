import "./experienciasCard.css";
import "../../styles/global.css";

const ExperienciasCard = ({ image, title, onClick }) => {
  return (
    <div className="experienciasCardContainer">
      <button className="experienciasCard" onClick={onClick}>
        <div
          className="backgroundOverlay"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <p className="experienciasCardText">{title}</p>
      </button>
    </div>
  );
};

export default ExperienciasCard;
