import { useEffect } from "react";

const Popup = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popupOverlay" onClick={onClose}>
      <div className="popupContent" onClick={e => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
