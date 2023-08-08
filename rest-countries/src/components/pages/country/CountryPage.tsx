import { useParams } from "react-router-dom";
import ExpandedCountry from "./ExpandedCountry";
import Header from "../../Header";
import BackButton from "./BackButton";
import "../../../styles/countryPage.scss"

const CountryPage = (): JSX.Element => {
  const { name } = useParams();

  return <>
    <Header />
    <BackButton />
    <main className="c-main">
      <ExpandedCountry name={name!} />
    </main>
  </>
};

export default CountryPage;
