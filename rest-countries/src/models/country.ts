import RegionsEnum from "./RegionsEnum";

class Country {
  flag;
  name;
  nativeName;
  population;
  region;
  subRegion;
  capital;
  topLevelDomain;
  currencies;
  lnaguages;
  borderCountries;
  constructor(
    flag: string,
    name: string,
    nativeName: string,
    population: string,
    region: RegionsEnum,
    subRegion: string,
    capital: string,
    topLevelDomain: string,
    currencies: string[],
    lnaguages: { [key: string]: string },
    borderCountries: Country[]
  ) {
    this.flag = flag;
    this.name = name;
    this.nativeName = nativeName;
    this.population = population;
    this.region = region;
    this.subRegion = subRegion;
    this.capital = capital;
    this.topLevelDomain = topLevelDomain;
    this.currencies = currencies;
    this.lnaguages = lnaguages;
    this.borderCountries = borderCountries;
  }
}

export default Country;
