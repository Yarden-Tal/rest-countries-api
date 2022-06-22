const SearchAndFilterBar = () => {
  return (
    <div className="search-filter-wrapper">
      <div className="search-wrapper">
        <input type="text" name="search" />
        <img src="" alt="search" className="seach-icon" />
      </div>
      <div className="filter-wrapper">
        <select name="region">
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
