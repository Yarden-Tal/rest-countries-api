import { useState, useEffect } from "react";
import { expandedCountryData } from "../../../models/country";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ColorThemeContext";
import { getBorderCountries, getCountryPageData } from "../../../api/countriesApi";
import { getCurrencies, getLanguages, getNativeName } from "../../../utils/utils";
import "./../../../styles/components/expandedCountry.scss";
import "./../../../styles/common.scss";

const ExpandedCountry = (props: { name: string }): JSX.Element => {
  const [data, setData] = useState<expandedCountryData>();
  const [borderData, setBorderData] = useState<string[]>();
  const [loadingTimeout, setLoadingTimeout] = useState<boolean>(false);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    const timeout: number = setTimeout(() => {
      setLoadingTimeout(true);
    }, 7000);

    async function fetchData() {
      try {
        const fetchedData = await getCountryPageData(props.name);
        clearTimeout(timeout);
        setData(fetchedData);

        if (fetchedData.borders) {
          const borders: string[] | undefined = getBorderCountries(fetchedData.borders);
          setBorderData(borders);
        }
      } catch (err) {
        const errMsg: string = "Error fetching country data:";
        console.error(`${errMsg} ${err}`);
        setLoadingTimeout(true);
      }
    }
    fetchData();
  }, [props.name]);

  if (loadingTimeout) return <div>Could not get data</div>;
  else if (!data) return <div>Loading...</div>;
  else
    return (
      <div className="country-wrapper-ex">
        <div className="country-flag">
          <img className={isDarkMode ? "dark-shadow" : ""} src={data.flags.png} alt={data.flags.alt} />
        </div>
        <div className="country-info-wrapper">
          <div className="country-title">{props.name}</div>

          <div className="country-details">
            {/* 1st group */}
            <div>
              {data.name.nativeName ? <div className="country-native-name">
                Native Name: <span>{getNativeName(data.name.nativeName)}</span>
              </div> : <></>}
              <div className="country-population">
                Population: <span>{data.population.toLocaleString()}</span>
              </div>
              <div className="country-region">
                Region: <span>{data.region}</span>
              </div>
              {data.subregion ? <div className="country-sub-region">
                Sub Region: <span>{data.subregion}</span>
              </div> : <></>}
              {data.capital ? <div className="country-capital">
                Capital: <span>{data.capital}</span>
              </div> : <></>}
            </div>

            {/* 2nd group */}
            <div>
              <div className="country-domain">
                Top Level Domain: <span>{data.tld[0]}</span>
              </div>
              {data.currencies ? <div className="country-currencies">
                Currencies: <span>{getCurrencies(data.currencies)}</span>
              </div> : <></>}
              {data.languages ? <div className="country-langs">
                Languages: <span>{getLanguages(data.languages)}</span>
              </div> : <></>}
            </div>
          </div>
          {borderData ? <div className="country-border-c">
            <div className="borders-label">Border Countries:</div>
            <div className="borders">
            {borderData.map((i: string) => (
                <Link key={i} to={`/country/${i}`}>
                  <span className={isDarkMode ? "border-c dark-shadow" : "border-c"}>{i}</span>
                </Link>
            ))}
            </div>
          </div> : <></>}
        </div>
      </div>
    );
};

export default ExpandedCountry;
