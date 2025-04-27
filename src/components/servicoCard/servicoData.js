import medicalBuilding from "../../assets/medicalBuilding.svg";
import stampApproved from "../../assets/stampApproved.svg";
import architectBlueprint from "../../assets/architectBlueprint.svg";
import revitIcon from "../../assets/revitIcon.svg";

export const servicos = [
  {
    id: 1,
    title: "Arquitetura Hospitalar",
    image: medicalBuilding,
    text: [
      {
        subText: "O serviço de projeto de arquitetura hospitalar consiste em:",
        bulletPoints: [
          "Elaboração do projeto legal de arquitetura (seja reforma ou obra nova) voltado para aprovação na Vigilância Sanitária local.",
          "Acompanhamento da avaliação do projeto até ser aprovado.",
          "Este processo pode envolver revisões ou reuniões com os órgãos reguladores.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Projetos para aprovação na Vigilância Sanitária",
    image: stampApproved,
    text: [
      {
        subText: "O serviço de aprovação na vigilânicia sanitária consiste em:",
        bulletPoints: [
          "Elaboração do projeto legal de arquitetura (seja reforma ou obra nova) voltado para aprovação na Vigilância Sanitária local.",
          "Acompanhamento da avaliação do projeto até ser aprovado.",
          "Este processo pode envolver revisões ou reuniões com os órgãos reguladores.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Consultoria de Arquitetura",
    image: architectBlueprint,
    text: [
      {
        subText:
          "Consultoria técnica especializada em projetos de estabelecimentos assistenciais de saúde (EAS), como :",
        bulletPoints: [
          "Hospitais",
          "Clínicas",
          "Unidades básicas de saúde (UBS)",
          "Unidades de pronto atendimento (UPA 24h)",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "REVIT: Consultoria e Treinamento",
    image: revitIcon,
    text: [
      {
        subText: "Consultoria e treinamento para:",
        bulletPoints: [
          "Implantação do uso do programa Revit nas rotinas de serviços da Engenharia Hospitalar de Hospitais de grande porte.",
          "Criação de processos de trabalho para se trabalhar em um modelo único e central do hospital com diversas obras diferenciadas.",
          "Criação de famílias específicas para equipamentos e móveis padronizados utilizados pela instituição.",
        ],
      },
    ],
  },
];
