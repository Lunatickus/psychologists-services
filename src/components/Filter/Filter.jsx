import { useState } from "react";
import { FilterStyled, TextStyled } from "./Filter.styled";
import { ReactComponent as ArrowUp } from "../../icons/chevron-up.svg";
import { ReactComponent as ArrowDown } from "../../icons/chevron-down.svg";
import { useSearchParams } from "react-router-dom";

export const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const handleChangeFilter = (e) => {
    setIsFilterOpen(!isFilterOpen);
    setFilterValue(e.target.value);
    setSearchParams({ filter: e.target.value });
  };

  return (
    <>
      <TextStyled>Filters</TextStyled>
      <FilterStyled>
        <div
          className="filter-title"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <p>{filterValue || "A to Z"}</p>
          {isFilterOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
        {isFilterOpen && (
          <select
            size="7"
            className="filter-select"
            onChange={handleChangeFilter}
          >
            <option className="filter-option" value="A to Z">
              A to Z
            </option>
            <option className="filter-option" value="Z to A">
              Z to A
            </option>
            <option className="filter-option" value="Cheap">
              Cheap
            </option>
            <option className="filter-option" value="Expensive">
              Expensive
            </option>
            <option className="filter-option" value="Popular">
              Popular
            </option>
            <option className="filter-option" value="Not popular">
              Not popular
            </option>
            <option className="filter-option" value="Show all">
              Show all
            </option>
          </select>
        )}
      </FilterStyled>
    </>
  );
};
