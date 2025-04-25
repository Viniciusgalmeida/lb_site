import React from "react";
import "./servicoCard.css";
import "../../styles/global.css";
// import medicalBuilding from "../../assets/medicalBuilding.svg";
import medicalBuilding from "../../assets/medicalBuilding.svg";

const ServicoCard = () => {
  return (
    <div className="servicoCardContainer">
      <div className="servicoCard">
        <img
          src={medicalBuilding}
          className="servicoCardImage"
          alt="Ícone de Edifício Médico"
        />
        <p className="servicoCardText">Arquitetura Hospitalar</p>
      </div>
    </div>
  );
};

export default ServicoCard;
