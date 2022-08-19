import { useState } from "react";
// Components
import BackButton from "./country-page/BackButton";
import ExpandedCountry from "./country-page/ExpandedCountry";
import Countries from "./home/Countries";
import SearchAndFilterBar from "./home/SearchAndFilterBar";

const Home = (): JSX.Element => {
  const [showExpanded, setShowExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setShowExpanded(!showExpanded);
  return (
    <>
      {!showExpanded ? <SearchAndFilterBar /> : <BackButton />}
      {!showExpanded ? (
        <Countries toggleExpanded={toggleExpanded} />
      ) : (
        <ExpandedCountry />
      )}
    </>
  );
};

export default Home;
