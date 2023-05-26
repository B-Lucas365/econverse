import { ProductsTypes } from "../../types/products";
import "./styles.scss";
import close from '../../assets/close.svg'

import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  details: ProductsTypes;
}

export const ModalComponent = ({
  isOpen,
  onRequestClose,
  details,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="" />
        
      </button>

      <div className="container-modal">
        <img src={details.photo} alt="" />
        <div>
          <p className="title">{details.productName}</p>
          <p className="price">
            {details.price
              ? details.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : ""}
          </p>
          <p className="description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>

          <a className="link">Veja mais detalhes do produto</a>
        </div>
      </div>
    </Modal>
  );
};
