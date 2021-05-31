import { ReactElement, useEffect } from "react";
import "./styles.css";

interface ModalProps {
  visible: boolean;
  title: ReactElement | string;
  content: ReactElement | string;
  footer: ReactElement | string;
  onClose: () => void;
}

const Modal = ({
  visible = false,
  title = "",
  content = "",
  footer = "",
  onClose,
}: ModalProps) => {
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <span className="modal__close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal__body">
          <div className="modal__content">{content}</div>
        </div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
};

export { Modal };
