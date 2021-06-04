import * as queryString from 'query-string';


const hash = queryString.parse(location.hash);
let lat = 0, lon = 0, min_lat = 0, min_lon = 0, max_lat = 0, max_lon = 0;
if (hash) {
  lat = parseFloat(hash.lat);
  lon = parseFloat(hash.lon);
  min_lat = parseFloat(hash.min_lat);
  max_lat = parseFloat(hash.max_lat);
  min_lon = parseFloat(hash.min_lon);
  max_lon = parseFloat(hash.max_lon);
  const width = max_lat - min_lat;
  const height = max_lon - min_lon;
  console.log(`permalink.js: lat: ${lat}, lon: ${lon}, min_lat: ${min_lat}, min_lon: ${min_lon}, max_lat: ${max_lat}, max_lon: ${min_lon}`);
}


const link = {
  lat: lat,
  lon: lon,
  min_lat: min_lat,
  max_lat: max_lat,
  min_lon: min_lon,
  max_lon: max_lon,
};


export default link;
