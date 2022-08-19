// API
import { extractSimpleData } from "../../../api/countriesApi";
// Components
import SimpleCountry from "./SimpleCountry";
import Loading from "../../Loading";
// Style
import "../../../styles/countries.scss";
import { useEffect, useState } from "react";
import { simpleCountryData } from "../../../models/country";

const Countries = (toggleExpanded: any): JSX.Element => {
  const [data, setData] = useState<simpleCountryData[]>();

  useEffect(() => {
    const getCountries = async () => {
      try {
        const cData = await extractSimpleData();
        setData(cData);
      } catch (e) {
        console.log(e);
      }
    };
    getCountries();
  }, []);

  return (
    <>
      {data ? (
        <div className="countries-container">
          {data.map((country, i) => (
            <SimpleCountry
              key={i}
              country={country}
              toggleExpanded={toggleExpanded}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Countries;
