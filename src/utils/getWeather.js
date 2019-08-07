import { calcTime } from "./getTime";

export const createUrl = val => {
  //b9bde36fffc04d4d37c0fc915aab9307
  let Api_Key = "b9bde36fffc04d4d37c0fc915aab9307";
  let base_url = "https://api.openweathermap.org/data/2.5/weather";
  let loc = val[val.length - 1] === " " ? val.substr(0, val.length - 1) : val;
  //if value contains a space as last char, strip it
  loc = loc.includes(" ") ? loc.replace(" ", "%20") : loc;
  base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
  base_url += loc + "&cnt=1&APPID=" + Api_Key;
  return base_url;
};

const isPostalCode = str => /^\d+$/.test(str);

export const parseJson = resp => {
  const resp_code = resp.cod.toString();
  if (resp_code !== "200") {
    return [resp.message, ""];
  }

  const far = ((parseFloat(resp.main.temp) - 273.15) * 1.8 + 32).toFixed(2);
  //Convert Kelvin To Fahrenheit
  const lat = resp.coord.lat;
  const lon = resp.coord.lon;
  const time = calcTime(lat, lon).toString();
  return [far.toString() + "°", time];
};
