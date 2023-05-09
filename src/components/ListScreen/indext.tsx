import Header from "../Header";
import FilterCard from "./FilterCard";
import ListingCard from "./ListingCard";

import "./style.css";

const ListScreen = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <FilterCard />
        <ListingCard />
      </div>
    </div>
  );
};

export default ListScreen;
