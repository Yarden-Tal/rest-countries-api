import { useEffect, useState } from "react";
import { extractSimpleData } from "../../../api/countriesApi";
import SimpleCountry from "./SimpleCountry";
import Loading from "../../Loading";
import "../../../styles/countries.scss";
import { simpleCountryData } from "../../../models/country";

const Countries = (props: { selectedRegion: string }): JSX.Element => {
  const [data, setData] = useState<simpleCountryData[]>([]);
  const { selectedRegion } = props;

  useEffect(() => {
    const getCountries = async () => {
      try {
        const cData = await extractSimpleData();
        
        // Filter countries by selectedRegion if it's not an empty string
        const filteredData = selectedRegion
          ? cData.filter((c: any) => c.region === selectedRegion)
          : cData;
        
        // Sort the filtered data by country name
        const sortedData = filteredData.slice().sort((a: simpleCountryData, b: simpleCountryData) => a.name.localeCompare(b.name));
        
        setData(sortedData);
      } catch (e) {
        console.log(e);
      }
    };
    getCountries();
  }, [selectedRegion]);

  return (
    <>
      {data.length > 0 ? (
        <div className="countries-container">
          {data.map((country, i) => (
            <SimpleCountry key={i} country={country} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Countries;
