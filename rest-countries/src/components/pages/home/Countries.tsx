import { useEffect, useState } from "react";
// API
import { extractSimpleData } from "../../../api/countriesApi";
// Components
import SimpleCountry from "./SimpleCountry";
import Loading from "../../Loading";
// Style
import "../../../styles/countries.scss";
// Models
import { simpleCountryData } from "../../../models/country";

const Countries = (): JSX.Element => {
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
