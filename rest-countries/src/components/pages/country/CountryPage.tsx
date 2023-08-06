import { useParams } from "react-router-dom";
import ExpandedCountry from "./ExpandedCountry";
import Header from "../../Header";

const CountryPage = (): JSX.Element => {
  const { name } = useParams();

  return <>
  <Header />
  <main>
    <ExpandedCountry name={name!} />
  </main>
  </>
};

export default CountryPage;
