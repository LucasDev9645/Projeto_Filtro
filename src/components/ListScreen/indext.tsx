import Header from "../Header";
import FilterCard from "./FilterCard";
import ListingCard from "./ListingCard";

import "./style.css";

const ListScreen = () => {
  return (
    <div>
      <Header />
      <h1>List screen</h1>
      <FilterCard />
      <ListingCard />
    </div>
  );
};

export default ListScreen;
