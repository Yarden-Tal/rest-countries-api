export const getNativeName = (nativeName: { [x: string]: { common: string; }; }): string => {
    return nativeName[Object.keys(nativeName)[0]].common;
  }

export const getCurrencies = (currencies: { [x: string]: { name: any; }; }): string => {
  const currencyNamesArray = Object.keys(currencies).map(currencyCode => currencies[currencyCode].name);
  const capitalizedCurrencyNames: string[] = currencyNamesArray.map(currencyName => {
    const words: string[] = currencyName.split(" ");
    const capitalizedWords: string[] = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  });
  return capitalizedCurrencyNames.join(", ");
}

export const getLanguages = (langs: { [x: string]: any; }): string => {
  const langsArray: string[] = Object.keys(langs).map(l => langs[l]);
  return langsArray.join(", ");
}