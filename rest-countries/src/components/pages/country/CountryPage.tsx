import { useParams } from "react-router-dom";
import ExpandedCountry from "./ExpandedCountry";
import Header from "../../Header";
import BackButton from "./BackButton";
import "../../../styles/components/countryPage.scss"
import { useTheme } from "../../../context/ColorThemeContext";

const CountryPage = (): JSX.Element => {
  const { name } = useParams();
  const { isDarkMode } = useTheme();

  return <>
    <Header />
    <BackButton />
    <main className={isDarkMode ? "c-main dark" : "c-main"}>
      <ExpandedCountry name={name!} />
    </main>
  </>
};

export default CountryPage;
