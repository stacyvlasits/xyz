import * as queryString from 'query-string';


const hash = queryString.parse(location.hash);
let lat = 0, lon = 0, min_lat = 0, min_lon = 0, max_lat = 0, max_lon = 0;
if (hash) {
  lat = parseFloat(hash.lat) || 0;
  lon = parseFloat(hash.lon) || 0;
  min_lat = parseFloat(hash.min_lat) || lat;
  max_lat = parseFloat(hash.max_lat) || lat;
  min_lon = parseFloat(hash.min_lon) || lon;
  max_lon = parseFloat(hash.max_lon) || lon;
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

if (location.hash == '') {
  const stringified = queryString.stringify(link);
  console.log('stringified: ', stringified);
  location.hash = stringified;
}

export default link;
