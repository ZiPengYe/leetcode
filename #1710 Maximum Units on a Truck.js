/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let res = 0;
  for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
    if (numberOfBoxes < truckSize) {
      res += numberOfBoxes * numberOfUnitsPerBox;
      truckSize -= numberOfBoxes;
    } else {
      res += truckSize * numberOfUnitsPerBox;
      break;
    }
  }
  return res;
};
