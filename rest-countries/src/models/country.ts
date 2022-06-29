import RegionsEnum from "./regionsEnum";

export interface simpleCountryData {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export interface expandedCountryData {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: RegionsEnum;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string[];
  lnaguages: { [key: string]: string };
  //TODO check type of borderCs!!!
  borderCountries: [];
}
