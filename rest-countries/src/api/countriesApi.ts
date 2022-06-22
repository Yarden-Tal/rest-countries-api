import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

export const getAllCountries = async () => {
  try {
    const res = (await axios.get(`${BASE_URL}all`)).data;
    // console.log(res);
    res.forEach((c: any) => {
      // const flag = c["flags"].svg;
      // const name = c["name"].common;
      // let nativeName = c["name"].nativeName;
      // nativeName = Object.values(nativeName)[0];
      // console.log(nativeName);

      const capital = c["capital"];
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getCountriesByRegion = async (region: string) => {
  try {
    // TODO test!
    const { data: res } = await axios.get(`${BASE_URL}region/${region}`);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getCountryByName = async (name: string) => {
  try {
    // TODO test!
    const { data: res } = await axios.get(`${BASE_URL}name/${name}`);
    return res;
  } catch (e) {
    console.error(e);
  }
};
