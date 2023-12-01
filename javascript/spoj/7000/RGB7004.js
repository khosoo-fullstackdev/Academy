function cubeVol(a) {
  let cubeVol = a * a * a;
  return cubeVol;
}
let vol = cubeVol(5);
console.log("CubesVolume:", vol);

function surface(a) {
  let surface = 6 * a * a;
  return surface;
}
let answer = surface(5);
console.log("CubesSurface:", answer);
