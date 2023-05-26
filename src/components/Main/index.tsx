import { CardInfo } from "../CardInfo";
import { Promo } from "../CardPromo";
import { Categories } from "../Categories";
import { Products } from "../Products";

import './styles.scss'

export const Main = () => {
  return (
    <main>
      <Promo />
      <Categories />
      <Products tipes={true}/>

      <div className="parceiros">
        <CardInfo title="Parceiros" />
        <CardInfo title="Parceiros" />
      </div>

      <Products tipes={false} more="Ver todos"/>

    </main>
  );
};
