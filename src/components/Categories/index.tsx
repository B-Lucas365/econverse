import "./styles.scss";
import tecnologia from "../../assets/categories/tecnologia.svg";
import supermercado from "../../assets/categories/supermercados.svg";
import bebidas from "../../assets/categories/bebidas.svg";
import ferramentas from "../../assets/categories/ferramentas.svg";
import saude from "../../assets/categories/saude.svg";
import esportes from "../../assets/categories/esportes.svg";
import moda from "../../assets/categories/moda.svg";
import mercado from "../../assets/categories/marcado.svg";
import bread from "../../assets/categories/bread.svg";
import suchi from "../../assets/categories/sushi.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Categories = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 6000,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div className="containerCategories">
      <Slider {...settings}>
        <div className="item ">
          <img src={tecnologia} alt="" />
          <p>Tecnologia</p>
        </div>
        <div className="item tecnologia">
          <img src={supermercado} alt="" />
          <p>Supermercado</p>
        </div>
        <div className="item">
          <img src={bebidas} alt="" />
          <p>Bebidas</p>
        </div>
        <div className="item">
          <img src={ferramentas} alt="" />
          <p>Ferramentas</p>
        </div>
        <div className="item">
          <img src={saude} alt="" />
          <p>Saúde</p>
        </div>
        <div className="item">
          <img src={esportes} alt="" />
          <p>Esportes</p>
        </div>
        <div className="item">
          <img src={moda} alt="" />
          <p>Moda</p>
        </div>
        <div className="item">
          <img src={mercado} alt="" />
          <p>Mercado</p>
        </div>
        <div className="item">
          <img src={bread} alt="" />
          <p>Padaria</p>
        </div>
        <div className="item">
          <img src={suchi} alt="" />
          <p>Oriental</p>
        </div>
      </Slider>
    </div>
  );
};
