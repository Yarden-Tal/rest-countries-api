import { useTheme } from "../../../context/ColorThemeContext";
import searchSvg from "../../../assets/search.svg";
import searchWhiteSvg from "../../../assets/search-white.svg";
import "../../../styles/components/searchAndFilterBar.scss";

const SearchAndFilterBar = (props: {
  selectedRegion: string | number | readonly string[] | undefined;
  setSelectedRegion: (arg0: string) => void;
  regions: any[];
  search: string;
  setSearch: (arg0: string) => void;
}): JSX.Element => {
  const { selectedRegion, setSelectedRegion, regions, setSearch } = props;
  const { isDarkMode } = useTheme();

  return (
    <div className="search-filter-wrapper">
      <div className={isDarkMode ? "search-wrapper dark-lighter dark-shadow" : "search-wrapper"}>
        <img src={isDarkMode ? searchWhiteSvg : searchSvg} alt="search" className="search-icon" />
        <input
          className={isDarkMode ? "dark-lighter" : ""}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="search"
          maxLength={40}
          placeholder="Search for a country..."
        />
      </div>
      <div className={isDarkMode ? "filter-wrapper dark-lighter" : "filter-wrapper"}>
        <select
          className={isDarkMode ? "dark-lighter" : ""}
          name="region"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((option) => (
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
