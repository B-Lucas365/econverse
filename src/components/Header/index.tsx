import "./styles.scss";
import logo from "../../assets/logo.svg";
import box from "../../assets/box.svg";
import favorit from "../../assets/favorit.svg";
import user from "../../assets/user.svg";
import shop from "../../assets/shop.svg";
import search from "../../assets/search.svg";
import save from "../../assets/save.svg";
import truck from "../../assets/truck.svg";
import card from "../../assets/card.svg";

export const Header = () => {
  return (
    <header>
      <div className="details-top">
        <div className="items">
          <img src={save} alt="" />
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div className="items">
          <img src={truck} alt="" />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div className="items">
          <img src={card} alt="" />
          <p>
            <span>Parcele</span> suas compras
          </p>
        </div>
      </div>

      <div className="main-header">
        <img src={logo} alt="" />

        <div className="search">
          <input type="text" placeholder="O que voce está buscando?" />
          <img src={search} alt="" />
        </div>

        <div className="profile">
          <img src={box} alt="" />
          <img src={favorit} alt="" />
          <img src={user} alt="" />
          <img src={shop} alt="" />
        </div>
      </div>

      <nav>
        <ul>
            <li>TODAS CATEGORIAS</li>
            <li>SUPERMERCADO</li>
            <li>LIVROS</li>
            <li>MODA</li>
            <li>LANÇAMENTOS</li>
            <span><li>OFERTA DO DIA</li></span>
            <li>ASSINATURA</li>
        </ul>
      </nav>
    </header>
  );
};
