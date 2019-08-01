import { calcTime } from "./getTime";

export const isPostalCode = str => /^\d+$/.test(str);

export const parseJson = resp => {
  const resp_code = resp.cod.toString();
  if (resp_code !== "200") {
    return "An error has occurred, unable to retrieveinformation.";
  }
  const far = ((parseFloat(resp.main.temp) - 273.15) * 1.8 + 32).toFixed(2);
  //Convert Kelvin To Fahrenheit
  const lat = resp.coord.lat;
  const lon = resp.coord.lon;
  const time = calcTime(lat, lon).toString();
  return [far.toString() + "°", time];
};
