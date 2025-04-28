import "./standardButton.css";

function StandardButton({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="standardButton">{children}</div>
    </a>
  );
}

export default StandardButton;
