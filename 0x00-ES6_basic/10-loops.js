export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let element of array) {
    newArray.push(appendString + element);
  }

  return newArray;
}
