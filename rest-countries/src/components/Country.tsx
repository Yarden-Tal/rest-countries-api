import { useState } from "react";

const Country = (isExpanded: any) => {
  return (
    <div className="country-wrapper">
      <div className="country-flag">
        <img src="" alt="" />
      </div>
      <div className="country-info-wrapper">
        <div className="country-title">Germany</div>
        {isExpanded && (
          <div className="country-native-name">
            Native Name: <span>Deutschland</span>
          </div>
        )}
        <div className="country-population">
          Population: <span>81,770,222</span>
        </div>
        <div className="country-region">
          Region: <span>Europe</span>
        </div>
        {isExpanded && (
          <div className="country-sub-region">
            Sub Region: <span>Western Europe</span>
          </div>
        )}
        <div className="country-capital">
          Capital: <span>Berlin</span>
        </div>
        {isExpanded && (
          <div className="country-domain">
            Top Level Domain: <span>.be</span>
          </div>
        )}
        {isExpanded && (
          <div className="country-currencies">
            Currencies: <span>Euro</span>
          </div>
        )}
        {isExpanded && (
          <div className="country-langs">
            Languages: <span>Dutch, French, German</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
