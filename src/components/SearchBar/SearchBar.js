import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchInput from "../SearchInput/SearchInput";
import SearchLocation from "../SearchLocation/SearchLocation";
import Button from "../Button/Button";

import "./SearchBar.css";

const SearchBar = ({
  isChecked,
  onCheckboxChange,
  searchTerm,
  onSearchInputChange,
  onFormSubmit,
  searchLocation,
  onLocationInputChange,
}) => {
  return (
    <form className="search-bar" onSubmit={onFormSubmit}>
      <SearchInput
        searchTerm={searchTerm}
        onSearchInputChange={onSearchInputChange}
      />
      <SearchLocation
        style={{ borderLeft: "1px solid grey" }}
        searchLocation={searchLocation}
        onLocationInputChange={onLocationInputChange}
      />
      <FilterCheckbox
        label="Full-Time"
        isChecked={isChecked}
        onCheckboxChange={onCheckboxChange}
      />
      <Button buttonStyle={"btn--primary"}>Search</Button>
    </form>
  );
};

export default SearchBar;
