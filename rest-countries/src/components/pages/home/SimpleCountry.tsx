import "../../../styles/simpleCountry.scss";

const ExpandedCountry = (props: any): JSX.Element => {
  const { flag, name, population, region, capital } = props.country;
  return (
    <div className="country-wrapper">
      <div className="country-flag">
        <img src={flag} alt="" />
      </div>
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

export default ExpandedCountry;
