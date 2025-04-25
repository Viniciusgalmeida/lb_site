import ServicoCard from "../../components/servicoCard/ServicoCard";
// import { servicos } from "../../data/servicosData";
import { servicos } from "./servicoData";

const ServicoSection = () => {
  const handleServicoClick = id => {
    console.log(`Serviço ${id} clicado`);
    // Adicione a lógica de navegação ou modal aqui
  };

  return (
    <div className="servicoContainer">
      {servicos.map(servico => (
        <ServicoCard
          key={servico.id}
          imagem={servico.imagem}
          titulo={servico.titulo}
          onClick={() => handleServicoClick(servico.id)}
        />
      ))}
    </div>
  );
};

export default ServicoSection;
