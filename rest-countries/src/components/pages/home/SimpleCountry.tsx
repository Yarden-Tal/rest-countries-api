import { useNavigate } from "react-router-dom";
import { simpleCountryData } from "../../../models/country";
import "../../../styles/simpleCountry.scss";

const SimpleCountry = (props: {
  country: simpleCountryData;
}): JSX.Element => {
  const { flag, name, population, region, capital } = props.country;

  const navigate = useNavigate(); // Get the navigation function from React Router

  return (
    <div className="country-wrapper" onClick={() => navigate(`/country/${name}`)}>
      <div
        className="country-flag"
        style={{ backgroundImage: `url(${flag})` }}
      ></div>
      <div className="country-info-wrapper">
        <div className="country-title">{name}</div>
        <div className="country-population">
          Population: <span>{population}</span>
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
