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
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 6000,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div className="item tecnologia">
          <img src={tecnologia} alt="" />
        </div>
        <div className="item">
          <img src={supermercado} alt="" />
        </div>
        <div className="item">
          <img src={bebidas} alt="" />
        </div>
        <div className="item">
          <img src={ferramentas} alt="" />
        </div>
        <div className="item">
          <img src={saude} alt="" />
        </div>
        <div className="item">
          <img src={esportes} alt="" />
        </div>
        <div className="item">
          <img src={moda} alt="" />
        </div>
        <div className="item">
          <img src={mercado} alt="" />
        </div>
        <div className="item">
          <img src={bread} alt="" />
        </div>
        <div className="item">
          <img src={suchi} alt="" />
        </div>
      </Slider>
    </div>
  );
};
