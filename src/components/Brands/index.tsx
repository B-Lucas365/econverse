import "./styles.scss";
import brands from "/brands.svg";

export const Brands = () => {
  return (
    <div className="brands">
      <h3 className="title">Navegue por marcas</h3>
      <div className="images">
        <div>
          <img src={brands} alt="" />
        </div>
        <div>
          <img src={brands} alt="" />
        </div>
        <div>
          <img src={brands} alt="" />
        </div>
        <div>
          <img src={brands} alt="" />
        </div>
        <div>
          <img src={brands} alt="" />
        </div>
      </div>
    </div>
  );
};
