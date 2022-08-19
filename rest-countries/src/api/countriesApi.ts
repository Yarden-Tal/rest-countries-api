import axios from "axios";
import {
  simpleDataItem,
  expandedCountryData,
  simpleCountryData,
} from "../models/country";
import RegionsEnum from "../models/regionsEnum";

const BASE_URL = "https://restcountries.com/v3.1/";

const getData = async () => {
  try {
    const res = (await axios(`${BASE_URL}all`)).data;
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const extractSimpleData = async () => {
  try {
    const res = await getData();
    const simpleParams: simpleCountryData[] = res.map((c: simpleDataItem) => {
      const flag = c.flags.svg;
      const name = c.name.common;
      const { population, region, capital } = c;
      const paramsObj: simpleCountryData = {
        flag,
        name,
        population,
        region,
        capital,
      };
      return paramsObj;
    });
    return simpleParams;
  } catch (e) {
    console.error(e);
  }
};

// export const extractExpandedData = async () => {
//   const res = await getData();
//   const expandedParams: expandedCountryData[] = res.map((c: any) => {
//     const flag: string = c.flags.svg;
//     const name: string = c.name.common;
//     const {
//       population,
//       region,
//       capital,
//     }: { population: number; region: RegionsEnum; capital: string } = c;
//     const paramsObj: expandedCountryData = {
//       flag,
//       name,
//       population,
//       region,
//       capital,
//       nativeName,
//       subRegion,
//       topLevelDomain,
//       currencies,
//       lnaguages,
//       borderCountries
//     };
//     return paramsObj;
//   });
//   return expandedParams;
// };
