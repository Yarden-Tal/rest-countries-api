import { useState } from "react";
// Components
import Header from "../Header";
import Countries from "./home/Countries";
import SearchAndFilterBar from "./home/SearchAndFilterBar";

const Home = (): JSX.Element => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const regions = [
    { value: "", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];
  

  return (
    <>
      <Header />
      <main>
        <SearchAndFilterBar {...{selectedRegion, setSelectedRegion, regions}} />
        <Countries {...{selectedRegion}} />
      </main>
    </>
  );
};

export default Home;
