// Ported from:
//
// https://github.com/hansroland/swissgeo/blob/master/src/Data/Geo/Swiss/Conversion.hs

const π = Math.PI, τ = 2 * π, e = Math.E;
const sqrt = Math.sqrt, exp = Math.exp, ln = Math.log,
  sin = Math.sin, cos = Math.cos, tan = Math.tan,
  asin = Math.asin, atan = Math.atan;


const DEGREE = 1 / 360;
const MINUTE = 1 / 360 / 60;
const SECOND = 1 / 360 / 3600;

export function deg2rad(deg, min = 0, sec = 0) {
  return τ * (deg * DEGREE + min * MINUTE + sec * SECOND);
}


// 1st numerical eccentricity (squared) of the Bessel ellipsoid (*).
const E = sqrt(0.006674372230614);

// Ellipsoidal longitude of the projection centre in Bern.
const λ0 = deg2rad(7, 26, 22.50);

// Radius of the projection sphere; meters.
const R = 6378815.90365;

// Relat. between longitude on sphere and on ellipsoid.
const α = 1.00072913843038;

// Latitude of the fundamental point on the sphere.
const b0 = deg2rad(46, 54, 27.83324844);

// Constant of the latitude formula.
const K = 0.0030667323772751;


/**
 * Convert World coordiantes to Swiss coordinates LV95
 * Exact formula.
 * See : 3.2 Ellipsoid. Koordinaten (λ, φ) ⇒ Schweiz. Projektionskoordinaten (y, x)
 */
export function wgs2lv95(φ, λ) {
  // a) Ellipsoid (φ, λ) ⇒ Kugel (b, l) (Gauss'sche Projektion)
  const S = α * ln(tan(π/4 + φ/2)) - α * E / 2
    * ln((1 + E * sin(φ)) / (1 - E * sin(φ))) + K;
  const b = 2 * (atan(exp(S)) - π/4);
  const l = α * (λ - λ0);
  // b) Äquatorsystem (b, l) ⇒ Pseudoäquatorsystem (b , l) (Rotation)
  const ll = atan(sin(l) / (sin(b0) * tan(b) + cos(b0)  * cos(l)));
  const bb = asin(cos(b0) * sin(b) - sin(b0) * cos(b) * cos(l));
  // c) Kugel (b , l) ⇒ Projektionsebene (y, x) (Mercator-Projektion)
  const yy = R * ll;
  const xx = R/2 * ln((1 + sin(bb)) / (1 - sin(bb)));
  const yyy = yy + 2600000;
  const xxx = xx + 1200000;
  return [yyy.toFixed(2), xxx.toFixed(2)];
}


export function lv952wgs(E, N) {
  const Y = E - 2600000;
  const X = N - 1200000;
  // a) projection plane (y, x) ⇒  sphere (b)
  const ll = Y / R;
  const bb = 2 * (atan(Math.pow(e, X / R)) - π/4);
  // b) pseudo-equator system (b), l ⇒ equator system (b, l)
  const b = asin(cos(b0) * sin(bb) + sin(b0) * cos(bb) * cos(ll));
  const l = atan(sin(ll) / (cos(b0) * cos(ll) - sin(b0) * tan(bb)));
  // c) sphere (b, l) ⇒ Bessel ellipsoid (φ, λ)
  const λ = λ0 + l / α;
  //const S = ln(tan
  // TODO
  return [0,0];
}
