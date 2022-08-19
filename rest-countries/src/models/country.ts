import RegionsEnum from "./regionsEnum";

// SIMPLE DATA

export interface simpleDataItem {
  flags: { svg: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string;
}

export interface simpleCountryData {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

// EXPANDED DATA

export interface expandableDataItem {}

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
  borderCountries: [];
}
