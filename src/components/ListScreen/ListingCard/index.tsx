import { useContext } from "react";

import * as request from "../../../util/request";
import { ContextProductCount } from "../../../util/contextProduct";

import "./style.css";

type MyFunction = (arg: number) => void;

type Props = {
  onValue1?: MyFunction;
  onValue2?: MyFunction;
};

const ListingCard = ({ onValue1, onValue2 }: Props) => {
  const valor1: any = onValue1;
  const valor2: any = onValue2;
  const { setContextProductCount } = useContext(ContextProductCount);
  setContextProductCount(request.findByPrice(valor1, valor2).length);

  return (
    <>
      {valor1 || valor2 ? (
        <div className="listingCard-container">
          {request.findByPrice(valor1, valor2).map((product) => (
            <ul key={product.id}>
              <li>
                <p>{product.name}</p>
                <h4>R$ {product.price}</h4>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <div className="listingCard-container">
          {request.findByPrice(0, Number.MAX_VALUE).map((product) => (
            <ul key={product.id}>
              <li>
                <p>{product.name}</p>
                <h4>R$ {product.price}</h4>
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default ListingCard;
