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

const getCountryData = async (country: string) => {
  try {
    const res = (await axios(`${BASE_URL}name/${country}?fullText=true`)).data;
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const extractSimpleData = async () => {
  try {
    const res = await getData();
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
    return simpleParams;
  } catch (e) {
    console.error(e);
  }
};

export const getCountryPageData = async (country: string) => {
  const res = await getCountryData(country);
  return res[0];
}
