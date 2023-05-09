import "./style.css";

import * as request from "../../../util/request";

const ListingCard = () => {
  return (
    <div className="listingCard-container">
      <ul>
        {request.findByPrice(0, 1500).map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <h4>R$ {product.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingCard;
