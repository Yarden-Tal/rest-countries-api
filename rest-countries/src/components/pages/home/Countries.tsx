// API
import { extractSimpleData } from "../../../api/countriesApi";
// Components
import SimpleCountry from "./SimpleCountry";
import Loading from "../../Loading";
// Style
import "../../../styles/countries.scss";
import { useEffect, useState } from "react";
import { simpleCountryData } from "../../../models/country";

const Countries = (): JSX.Element => {
  const [data, setData] = useState<simpleCountryData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCountries = async () => {
      const data = await extractSimpleData();
      setData(data);
    };
    getCountries();
  }, []);
  return (
    <div className="countries-container">
      {data ? (
        data.map((country, index) => (
          <SimpleCountry key={index} country={country} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Countries;
