import { useState } from "react";

import "./style.css";

type FormData = {
  num1?: number;
  num2?: number;
};

type MyFunction = (arg: any) => void;

type Props = {
  onValue1?: MyFunction;
  onValue2?: MyFunction;
};

const FilterCard = ({ onValue1, onValue2 }: Props) => {
  const [formData1, setFormData1] = useState<FormData>({});
  const [formData2, setFormData2] = useState<FormData>({});

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData1({ ...formData1, [name]: value });
    setFormData2({ ...formData2, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formData1.num1;
    formData2.num2;
    if (onValue1 && onValue2) {
      onValue1(formData1.num1 || 0);
      onValue2(formData2.num2 || Number.MAX_VALUE);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          value={formData1.num1 || ""}
          name="num1"
          type="text"
          placeholder="Preço mínimo"
          onChange={handleInputChange}
        />
        <input
          value={formData2.num2 || ""}
          name="num2"
          type="text"
          placeholder="Preço máximo"
          onChange={handleInputChange}
        />
        <button>FILTRAR</button>
      </form>
    </div>
  );
};

export default FilterCard;
