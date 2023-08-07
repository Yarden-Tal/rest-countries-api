import { useState } from "react";
import searchSvg from "../../../assets/search.svg";
import "../../../styles/searchAndFilterBar.scss";

const SearchAndFilterBar = (props: {selectedRegion: string | number | readonly string[] | undefined, setSelectedRegion: (arg0: string) => void, regions: any[]}): JSX.Element => {


  return (
    <div className="search-filter-wrapper">
      <div className="search-wrapper">
        <img src={searchSvg} alt="search" className="search-icon" />
        <input
          type="search"
          name="search"
          maxLength={40}
          placeholder="Search for a country..."
        />
      </div>
      <div className="filter-wrapper">
        <select name="region" value={props.selectedRegion} onChange={(e) => props.setSelectedRegion(e.target.value)}>
          {props.regions.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
