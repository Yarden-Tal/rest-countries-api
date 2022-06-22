import searchSvg from "../assets/search.svg";
import "../styles/searchAndFilterBar.scss";

const SearchAndFilterBar = () => {
  return (
    <div className="search-filter-wrapper">
      <div className="search-wrapper">
        <img src={searchSvg} alt="search" className="search-icon" />
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
        />
      </div>
      <div className="filter-wrapper">
        <select name="region">
          <option value="" disabled selected hidden>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
