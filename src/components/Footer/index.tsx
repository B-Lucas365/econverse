import "./styles.scss";
import visa from "../../assets/brands/visa.svg";
import elo from "../../assets/brands/elo.svg";
import alelo from "../../assets/brands/alelo.svg";
import dinners from "../../assets/brands/dinners.svg";
import ifood from "../../assets/brands/ifood.svg";
import mastercard from "../../assets/brands/mastercard.svg";
import pix from "../../assets/brands/pix.svg";
import amex from "../../assets/brands/amex.svg";
import ticket from "../../assets/brands/ticket.svg";
import sodexo from "../../assets/brands/sodexo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="content">
          <div className="about">
            <h3>Sobre nós</h3>
            <div>
              <p>CONHEÇA</p>
              <p>INDICAÇAO E DESCONTO</p>
            </div>
          </div>
          <div className="util">
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <div>
              <p>FALE CONOSCO</p>
              <p>DÚVIDAS</p>
              <p>PRAZOS DE ENTREGA</p>
              <p>FORMAS DE PAGAMENTO</p>
              <p>POLÍTICA DE PRIVACIDADE</p>
              <p>TROCAS E DEVOLUÇÕES</p>
            </div>
          </div>

          <div className="payment">
            <h3>FORMAS DE PAGAMENTO</h3>
            <div className="payment-methods">
              <img src={visa} alt="" />
              <img src={elo} alt="" />
              <img src={alelo} alt="" />
              <img src={dinners} alt="" />
              <img src={ifood} alt="" />
              <img src={mastercard} alt="" />
              <img src={pix} alt="" />
              <img src={amex} alt="" />
              <img src={ticket} alt="" />
              <img src={sodexo} alt="" />
            </div>
          </div>
        </div>

        <div className="register">
          <div className="infos">
            <h3>CADASTRE-SE E RECEBA NOSSAS</h3>
            <p>NOVIDADES E PROMOÇOES</p>
          </div>
          <div className="description">
            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
          </div>

          <div className="inputs">
            <input type="text" placeholder="SEU EMAIL" />
            <button>OK</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
