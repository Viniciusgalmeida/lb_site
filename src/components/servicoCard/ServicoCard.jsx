import React from "react";
import "./servicoCard.css";
import "../../styles/global.css";
// import medicalBuilding from "../../assets/medicalBuilding.svg";
import medicalBuilding from "../../assets/medicalBuilding.svg";

const ServicoCard = () => {
  return (
    <div className="servicoCardContainer">
      <button className="servicoCard">
        <img
          src={medicalBuilding}
          className="servicoCardImage"
          alt="Ícone de Edifício Médico"
        />
        <p className="servicoCardText">Arquitetura Hospitalar</p>
      </button>
    </div>
  );
};

export default ServicoCard;
