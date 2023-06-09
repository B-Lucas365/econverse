import "./styles.scss";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ProductsTypes } from "../../types/products";

import left from "/left.svg";
import right from "/right.svg";
import { ModalComponent } from "../Modal";

interface Props {
  tipes: boolean,
  more?: string
}

export const Products = ({tipes, more}: Props) => {
  const url =
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

  const [products, setProducts] = useState<ProductsTypes[]>();
  const carousel = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState(false)
  const [details, setDetails] = useState<ProductsTypes>({} as ProductsTypes);

  useEffect(() => {
    axios({
      method: "get",
      url: url,
    })
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  function handleOpenModal(product: ProductsTypes){
    setDetails(product)
    setModal(true)
  }
  
  function handleCloseModal(){
    setModal(false)
  }

  return (
    <div className="container">
      <h2 className="title">Produtos relacionados</h2>
      <p className="more">{more}</p>
      {tipes && (
      <div className="tipes">
        <div className="focus">CELULAR</div>
        <div>ACESSÓRIOS</div>
        <div>TABLETS</div>
        <div>NOTEBOOKS</div>
        <div>TVS</div>
        <div>VER TODOS</div>
      </div>
    )}

      <div className="products" ref={carousel}>
        {products?.map((product) => (
          <div className="product">
            <div>
              <img src={product.photo} alt="" />
            </div>
            <p className="description">{product.descriptionShort}</p>
            <div>
              <div>
                <p className="old-price">R$ 30,90</p>
                <h3 className="price">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h3>
              </div>

              <p className="more">ou 2x de R$ 49,95 sem juros</p>
            </div>

            <div className="buttons">
              <span>Frete grátis</span>
              <br />
              <button className="shop" onClick={() => handleOpenModal(product)}>Comprar</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleLeftClick} className="arrow-left">
        <img src={left} alt="" />
      </button>
      <button onClick={handleRightClick} className="arrow-right">
        <img src={right} alt="" />
      </button>

      <ModalComponent isOpen={modal} onRequestClose={handleCloseModal} details={details}/>
    </div>
  );
};
