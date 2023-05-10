import { useState } from "react";

import Header from "../Header";
import FilterCard from "./FilterCard";
import ListingCard from "./ListingCard";

import "./style.css";

const ListScreen = () => {
  const [formValue1, setFormValue1] = useState<any>();
  const [formValue2, setFormValue2] = useState<any>();

  const handleValue1 = (value1: number) => {
    setFormValue1(value1);
    console.log(formValue1);
  };

  const handleValue2 = (value2: number) => {
    setFormValue2(value2);
    console.log(formValue2);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <FilterCard onValue1={handleValue1} onValue2={handleValue2} />
        <ListingCard onValue1={formValue1} onValue2={formValue2} />
      </div>
    </div>
  );
};

export default ListScreen;
