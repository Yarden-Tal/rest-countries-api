import { getAllCountries } from "../api/countriesApi";
import Country from "./Country";

const Countries = () => {
  getAllCountries();

  return <div>Countries</div>;
};

export default Countries;
