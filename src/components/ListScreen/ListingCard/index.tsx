import "./style.css";

import * as request from "../../../util/request";

type MyFunction = (arg: any) => void;

type Props = {
  onValue1?: MyFunction;
  onValue2?: MyFunction;
};

const ListingCard = ({ onValue1, onValue2 }: Props) => {
  const valor1: any = onValue1;
  const valor2: any = onValue2;

  return (
    <div className="listingCard-container">
      {request.findByPrice(valor1, valor2).map((product) => (
        <ul>
          <li key={product.id}>
            <p>{product.name}</p>
            <h4>R$ {product.price}</h4>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ListingCard;
