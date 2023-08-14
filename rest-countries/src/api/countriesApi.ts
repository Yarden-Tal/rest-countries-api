import {
  simpleDataItem,
  expandedCountryData,
  simpleCountryData,
} from "../models/country";
import { getAllCountries, getCountryByName } from "./apiCalls";

const LOCAL_STORAGE_KEY: string = "countryData";
const LOCAL_STORAGE_EXP_KEY: string = "countryDataExp";

const getCountryData = (countryName: string) => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_EXP_KEY);
  if (storedData) {
    const countryData = JSON.parse(storedData);
    const countryInfo = countryData.find((c: expandedCountryData) => c.name.common === countryName);
    return [countryInfo];
  }
  else return getCountryByName(countryName);
};

export const extractSimpleData = async () => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedData) return JSON.parse(storedData);
  else {
    const res = await getAllCountries();
    localStorage.setItem(LOCAL_STORAGE_EXP_KEY, JSON.stringify(res));
    const simpleParams: simpleCountryData[] = res.map((c: simpleDataItem) => {
      const flag: string = c.flags.svg;
      const name: string = c.name.common;
      const { population, region, capital }: { population: number, region: string, capital: string } = c;
      const paramsObj: simpleCountryData = {
        flag,
        name,
        population,
        region,
        capital,
      };
      return paramsObj;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(simpleParams));
    return simpleParams;
  }
};

export const getCountryPageData = (country: string) => {
  const res = getCountryData(country);
  //@ts-ignore
  if (res) return res[0];
}

export const getBorderCountries = (borders: string[]): string[] | undefined => {
  const storedData: string| null = localStorage.getItem(LOCAL_STORAGE_EXP_KEY);
  if (!storedData) return;
  const filteredParsedData = borders.flatMap((bc: string) => JSON.parse(storedData).filter((i: expandedCountryData) => i.cca3 === bc))
  const bordersArray: string[] = filteredParsedData.map(i => i.name.common)
  return bordersArray;
}