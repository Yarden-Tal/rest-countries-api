import { useParams } from "react-router-dom";
import ExpandedCountry from "./ExpandedCountry";

const CountryPage = (): JSX.Element => {
  const { name } = useParams();

  return <ExpandedCountry name={name!} />
};

export default CountryPage;
