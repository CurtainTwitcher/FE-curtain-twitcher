import dummy from "../postcodeComponents/graphDataDummy";
import _ from "underscore";

let array = [];

dummy.map(crime => {
  return array.push([crime.crimeType]);
});

let crimes = _.flatten(array).reduce((acc, item, i) => {
  acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
  return acc;
}, {});

export default crimes;
