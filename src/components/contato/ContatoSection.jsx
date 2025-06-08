import { useState } from "react";
import "./contato.css";
import linkedinLogo from "../../assets/linkedinLogo.png";
import emailIcon from "../../assets/emailIcon.png";
import whatsappLogo from "../../assets/whatsappLogo.png";
import copyIcon from "../../assets/copy-icon.svg";

function ContatoSection() {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText("lucasvieirad2@gmai.com").then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000); // some após 3 segundos
    });
  };

  return (
    <section className="containerContato">
      <h3 className="titleContato">Contato</h3>

      <button className="botaoCopiarEmail" onClick={copiarEmail}>
        lucasvieirad2@gmai.com
        <img src={copyIcon} alt="Copiar e-mail" className="iconeCopia" />
      </button>

      <div className="contatoLinks">
        <a
          href="mailto:lucasvieirad2@gmai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={emailIcon}
            className="emailIconStyle"
            id="emailIcon"
            alt="Ícone do e-mail"
            loading="lazy"
          />
        </a>
        <a
          href="https://wa.me/553189022905?text=Ol%C3%A1%2C%20Lucas%20Batista."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={whatsappLogo}
            className="whatsappIconStyle"
            alt="Ícone do WhatsApp"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-batista-b2a350108/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinLogo}
            className="linkedinIconStyle"
            alt="Ícone do LinkedIn"
            loading="lazy"
          />
        </a>
      </div>

      {copiado && <div className="notificacaoCopiado">*E-mail copiado</div>}
    </section>
  );
}

export default ContatoSection;
