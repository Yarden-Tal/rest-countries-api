// API
import { extractSimpleData } from "../../../api/countriesApi";
// Components
import SimpleCountry from "./SimpleCountry";
// Style
import "../../../styles/countries.scss";
import { useEffect, useState } from "react";
import { simpleCountryData } from "../../../models/country";

const Countries = (): JSX.Element => {
  const [data, setData] = useState<simpleCountryData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCountries = async (): Promise<void> => {
      const data = await extractSimpleData();
      setData(data);
    };
    getCountries();
  }, []);
  if (!data) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  else
    return (
      <div className="countries-container">
        {data.map((country, index) => (
          <SimpleCountry key={index} country={country} />
        ))}
      </div>
    );
};

export default Countries;
