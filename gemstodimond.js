function gemsToDiamond(x, y, z) {
  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number") {
    return "please provide me all parameter value in number";
  } else {
    const friend1 = 21;
    const friend2 = 32;
    const friend3 = 43;

    const totalDiamond = x * friend1 + y * friend2 + z * friend3;
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
}
const gemsCount = gemsToDiamond(100, 5, 1);
console.log(gemsCount);
