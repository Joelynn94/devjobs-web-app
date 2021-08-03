import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Button from "../Button/Button";

import "./MobileModalFilter.css";
import SearchLocation from "../SearchLocation/SearchLocation";

const MobileModalFilter = ({
  onFormSubmit,
  onFilterClick,
  searchLocation,
  onLocationInputChange,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <form
      className="mobile-modal"
      onClick={onFilterClick}
      onSubmit={onFormSubmit}
    >
      <div
        className="mobile-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-modal__top">
          <SearchLocation
            searchLocation={searchLocation}
            onLocationInputChange={onLocationInputChange}
          />
        </div>
        <div className="mobile-modal__bottom">
          <FilterCheckbox
            label="Full-Time Only"
            isChecked={isChecked}
            onCheckboxChange={onCheckboxChange}
          />
          <Button buttonStyle={"btn--primary"}>Search</Button>
        </div>
      </div>
    </form>
  );
};

export default MobileModalFilter;
