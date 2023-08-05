const ExpandedCountry = (props: {name: string}): JSX.Element => {
  return (
    <div className="country-wrapper">
      <div className="country-flag">
        <img src="" alt="" />
      </div>
      <div className="country-info-wrapper">
        <div className="country-title">{props.name}</div>
        <div className="country-native-name">
          Native Name: <span>Deutschland</span>
        </div>
        <div className="country-population">
          Population: <span>81,770,222</span>
        </div>
        <div className="country-region">
          Region: <span>Europe</span>
        </div>
        <div className="country-sub-region">
          Sub Region: <span>Western Europe</span>
        </div>
        <div className="country-capital">
          Capital: <span>Berlin</span>
        </div>
        <div className="country-domain">
          Top Level Domain: <span>.be</span>
        </div>
        <div className="country-currencies">
          Currencies: <span>Euro</span>
        </div>
        <div className="country-langs">
          Languages: <span>Dutch, French, German</span>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCountry;
