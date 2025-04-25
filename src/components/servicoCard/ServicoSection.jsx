import ServicoCard from "../../components/servicoCard/ServicoCard";
import { servicos } from "./servicoData";

const ServicoSection = () => {
  const handleServicoClick = id => {
    console.log(`Serviço ${id} clicado`);
  };

  return (
    <div className="servicoContainer">
      {servicos.map(servico => (
        <ServicoCard
          key={servico.id}
          image={servico.image}
          title={servico.title}
          onClick={() => handleServicoClick(servico.id)}
        />
      ))}
    </div>
  );
};

export default ServicoSection;
