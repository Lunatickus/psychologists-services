import { useEffect, useState } from "react";
import { FilterStyled, TextStyled } from "./Filter.styled";
import { ReactComponent as ArrowUp } from "../../icons/chevron-up.svg";
import { ReactComponent as ArrowDown } from "../../icons/chevron-down.svg";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAllPsychologists,
  fetchPsychologistsFirstThree,
  fetchPsychologistsFirstThreeReverse,
} from "../../redux/psychologists/psychologistsOperations";

export const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/psychologists") {
      return;
    }

    const fetchPsychologistsByFilter = (str) => {
      if (
        str === "A to Z" ||
        str === "Less than 10$" ||
        str === "Not popular"
      ) {
        dispatch(fetchPsychologistsFirstThree(str));
      } else if (
        str === "Z to A" ||
        str === "Greater than 10$" ||
        str === "Popular"
      ) {
        dispatch(fetchPsychologistsFirstThreeReverse(str));
      } else if (str === "Show all") {
        pathname === "/psychologists" && dispatch(fetchAllPsychologists());
      } else {
        dispatch(fetchPsychologistsFirstThree("A to Z"));
      }
    };

    setFilterValue(filter);
    fetchPsychologistsByFilter(filter);
  }, [dispatch, filter, pathname]);

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
            <option className="filter-option" value="Less than 10$">
              Less than 10$
            </option>
            <option className="filter-option" value="Greater than 10$">
              Greater than 10$
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
