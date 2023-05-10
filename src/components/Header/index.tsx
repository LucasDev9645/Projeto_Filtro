import { useContext } from "react";

import { ContextProductCount } from "../../util/contextProduct";

import "./style.css";

const Header = () => {
  const { contextProductCount } = useContext(ContextProductCount);

  return (
    <div>
      <header className="header-container">
        <h1>LF Filter</h1>
        <div>
          {contextProductCount ? (
            <p>{contextProductCount} produto(s)</p>
          ) : (
            <p>13 produto(s)</p>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
