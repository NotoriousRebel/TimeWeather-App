export const calcTime = (lat, lon) => {
  const tzlookup = require("tz-lookup");
  const moment = require("moment-timezone");
  try {
    const timezone = tzlookup(lat, lon);
    //Look up timezone with latitude and longitude
    let time = moment().tz(timezone.toString());
    time = time.format("hh:mm a");
    console.log("time: ", time);
    return time;
  } catch (e) {
    return "An error has occurred looking up the time.";
  }
};
