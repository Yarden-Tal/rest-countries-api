import axios from "axios";

const BASE_URL: string = "https://restcountries.com/v3.1/";

export const getAllCountries = async () => {
    try {
        const res = (await axios(`${BASE_URL}all`)).data;
        return res;
    } catch (e) {
        console.error(e);
    }
};

export const getCountryByName = async (name: string) => {
    try {
        const res = (await axios(`${BASE_URL}name/${name}?fullText=true`)).data;
        return res;
    } catch (e) {
        console.error(e);
    }
}
