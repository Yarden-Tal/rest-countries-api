import { useEffect, useState } from "react";
import { extractSimpleData } from "../../../api/countriesApi";
import SimpleCountry from "./SimpleCountry";
import Loading from "../../Loading";
import NoResults from "../home/NoResults";
import "../../../styles/components/countries.scss";
import { simpleCountryData } from "../../../models/country";

const Countries = (props: { selectedRegion: string, search: string }): JSX.Element => {
  const [data, setData] = useState<simpleCountryData[]>([]);
  const { selectedRegion, search } = props;
  const isSearching = search.length > 0;

  useEffect(() => {
    const getCountries = async () => {
      try {
        const cData = await extractSimpleData();
        
        let filteredData = selectedRegion
        ? cData.filter((c: simpleCountryData) => c.region === selectedRegion)
        : cData;
        
        if (search) {
          filteredData = filteredData.filter((c: simpleCountryData) =>
          c.name.toLowerCase().includes(search.toLowerCase())
          );
        }
        const sortedData: simpleCountryData[] = filteredData.slice().sort((a: simpleCountryData, b: simpleCountryData) => a.name.localeCompare(b.name));
        setData(sortedData);
      } catch (e) {
        console.log(e);
      }
    };
    getCountries();
  }, [selectedRegion, search]);

  return (
    <>
      {data.length > 0 ? (
        <div className="countries-container">
          {data.map((country, i) => (
            <SimpleCountry key={i} country={country} />
          ))}
        </div>
      ) : isSearching ? <NoResults /> : <Loading />
      }
    </>
  );
};

export default Countries;
