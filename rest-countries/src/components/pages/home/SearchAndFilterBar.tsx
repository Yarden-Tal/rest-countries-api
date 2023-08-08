import searchSvg from "../../../assets/search.svg";
import "../../../styles/searchAndFilterBar.scss";

const SearchAndFilterBar = (props: {
  selectedRegion: string | number | readonly string[] | undefined;
  setSelectedRegion: (arg0: string) => void;
  regions: any[];
  search: string;
  setSearch: (arg0: string) => void;
}): JSX.Element => {
  const { selectedRegion, setSelectedRegion, regions, setSearch } = props;

  return (
    <div className="search-filter-wrapper">
      <div className="search-wrapper">
        <img src={searchSvg} alt="search" className="search-icon" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search"
          maxLength={40}
          placeholder="Search for a country..."
        />
      </div>
      <div className="filter-wrapper">
        <select
          name="region"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((option: any) => (
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
