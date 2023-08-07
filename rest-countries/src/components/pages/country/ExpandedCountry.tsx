import { useState, useEffect } from "react";
import { getBorderCountries, getCountryPageData } from "../../../api/countriesApi";
import { getCurrencies, getLanguages, getNativeName } from "../../../utils/utils";
import "./../../../styles/expandedCountry.scss"

const ExpandedCountry = (props: { name: string }): JSX.Element => {
  const [data, setData] = useState<any>(null);
  const [borderData, setBorderData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountryPageData(props.name);
        setData(data);
        const borderData = await getBorderCountries(data.borders);
        setBorderData(borderData)
        
      } catch (err) {
        console.error('Error fetching country data:', err);
      }
    }

    fetchData();
  }, [props.name]);
  

  if (!data) return <div>Loading...</div>;
  else return (
    <div className="country-wrapper-ex">
      <div className="country-flag">
        <img src={data.flags.png} alt={data.flags.alt} />
      </div>
      <div className="country-info-wrapper">
        <div className="country-title">{props.name}</div>

        <div className="country-details">
          {/* 1st group */}
          <div>
            <div className="country-native-name">
              Native Name: <span>{getNativeName(data.name.nativeName)}</span>
            </div>
            <div className="country-population">
              Population: <span>{data.population.toLocaleString()}</span>
            </div>
            <div className="country-region">
              Region: <span>{data.region}</span>
            </div>
            <div className="country-sub-region">
              Sub Region: <span>{data.subregion}</span>
            </div>
            <div className="country-capital">
              Capital: <span>{data.capital[0]}</span>
            </div>
          </div>

          {/* 2nd group */}
          <div>
            <div className="country-domain">
              Top Level Domain: <span>{data.tld[0]}</span>
            </div>
            <div className="country-currencies">
              Currencies: <span>{getCurrencies(data.currencies)}</span>
            </div>
            <div className="country-langs">
              Languages: <span>{getLanguages(data.languages)}</span>
            </div>
          </div>

        </div>

        <div className="country-border-c">
          Border Countries: {data.borders.map((i: string) => <span key={i} className="border-c">{i}</span>)}
        </div>
      </div>
    </div>
  );
};

export default ExpandedCountry;
