import { useParams } from "react-router-dom";
import ExpandedCountry from "./ExpandedCountry";
import Header from "../../Header";
import BackButton from "./BackButton";

const CountryPage = (): JSX.Element => {
  const { name } = useParams();

  return <>
  <Header />
  <BackButton />
  <main>
    <ExpandedCountry name={name!} />
  </main>
  </>
};

export default CountryPage;
