function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject("Error: Input must be an array");
    } else {
      const result = mixedArray
        .filter((item) => typeof item === "string") // keep only strings
        .map((word) => word.toLowerCase()); // convert to lowercase

      if (result.length > 0) {
        resolve(result);
      } else {
        reject("Error: No string elements found in array");
      }
    }
  });
}

// input
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
