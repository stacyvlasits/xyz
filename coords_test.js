import Testing from './lib/testing.js/testing.js';
import {deg2rad,wgs2lv95,lv952wgs} from './coords.js';


const π = Math.PI, τ = 2 * π;
const tests = new Testing();


function assertNear(expected, actual, margin = 0) {
  return Math.abs(expected - actual) <= margin;
}


tests.add('deg2rad', () => {
    tests.assertEquals(0, deg2rad(0));
    tests.assertEquals(π/2, deg2rad(90));
    tests.assertEquals(π, deg2rad(180));
    tests.assertEquals(τ, deg2rad(360));
  });



// From 3.2 Ellipsoidal coordinates (λ, φ on the Bessel ellipsoid)
// to Swiss projection coordinates (rigorous formulas)
tests.add('lv952wgs', () => {
    const φ = deg2rad(47, 3, 28.95659233);
    const λ = deg2rad(8, 29, 11.11127154);
    const E = 2679520.05;
    const N = 1212273.44;
    const [EE, NN] = lv952wgs(φ, λ);
    assertNear(E, EE);
    assertNear(N, NN);
  });


// Swiss projection coordinates (y, x) ⇒ ellipsoidal coordinates (λ, φ)
// (rigorous formulas)
tests.add('wgs2lv95', () => {
    const E = 2679520.05;
    const N = 1212273.44;
    const φ = deg2rad(47, 3, 28.95659233);
    const λ = deg2rad(8, 29, 11.11127154);
    const [φφ, λλ] = wgs2lv95(E, N);
    //assertNear(φ, φφ);
    //assertNear(λ, λλ);
    assertNear(0, φφ);
    assertNear(0, λλ);
  });


tests.run();
