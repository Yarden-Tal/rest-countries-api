import { useNavigate } from "react-router-dom";
import { simpleCountryData } from "../../../models/country";
import { useTheme } from "../../../context/ColorThemeContext";
import "../../../styles/components/simpleCountry.scss";
import "../../../styles/common.scss";


const SimpleCountry = (props: {
  country: simpleCountryData;
}): JSX.Element => {
  const { flag, name, population, region, capital } = props.country;

  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "country-wrapper dark-lighter dark-shadow" : "country-wrapper"} onClick={() => navigate(`/country/${name}`)}>
      <div className="flag-wrapper">
        <img className="country-flag" src={flag} alt={flag} />
      </div>
      {/* <div
        className="country-flag"
        style={{ backgroundImage: `url(${flag})` }}
      ></div> */}
      <div className="country-info-wrapper">
        <div className="country-title">{name}</div>
        <div className="country-population">
          Population: <span>{population.toLocaleString()}</span>
        </div>
        <div className="country-region">
          Region: <span>{region}</span>
        </div>
        <div className="country-capital">
          Capital: <span>{capital}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleCountry;
