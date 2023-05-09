import "./style.css";

const FilterCard = () => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Preço mínimo" />
        <input type="text" placeholder="Preço máximo" />
        <button>FILTRAR</button>
      </form>
    </div>
  );
};

export default FilterCard;
