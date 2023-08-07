import axios from "axios";
import {
  simpleDataItem,
  expandedCountryData,
  simpleCountryData,
} from "../models/country";

const BASE_URL: string = "https://restcountries.com/v3.1/";
const LOCAL_STORAGE_KEY: string = "countryData";

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
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const countryData = JSON.parse(storedData);
      const countryInfo = countryData.find((c: simpleCountryData) => c.name === country);
      return [countryInfo];
    }
    
    const res = (await axios(`${BASE_URL}name/${country}?fullText=true`)).data;
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const extractSimpleData = async () => {
  try {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) return JSON.parse(storedData);
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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(simpleParams));
    return simpleParams;
  } catch (e) {
    console.error(e);
  }
};

export const getCountryPageData = async (country: string) => {
  const res = await getCountryData(country);
  return res[0];
}

export const getBorderCountries = async (borderCountries: string[]) => {
  try {
    borderCountries.forEach(async (c: any) => {
      const res = await axios(`${BASE_URL}alpha?codes=${c.cioc}`)
      console.log(res);
      
    })
  } catch (e) {
    console.error(e);
    
  }
}
