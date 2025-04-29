import "./contato.css";
import linkedinLogo from "../../assets/linkedinLogo.png";
import emailIcon from "../../assets/emailIcon.png";
import whatsappLogo from "../../assets/whatsappLogo.png";

function ContatoSection() {
  return (
    <section className="containerContato">
      <h3 className="titleContato">Contato</h3>
      <div className="contatoLinks">
        <a
          href="mailto:lucasvieirad2@gmai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={emailIcon}
            className="iconStyle"
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
            className="iconStyle"
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
            className="iconStyle"
            alt="Ícone do LinkedIn"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}

export default ContatoSection;
