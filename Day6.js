const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const array3 = [5, 6, 7, 8];

const abc = (a1, a2, a3) => {
  const combinedArr = [...a1, ...a2, ...a3];
  const uniqueArr = [...new Set(combinedArr)];
  const result = uniqueArr
    .filter((num) => num % 2 !== 0)
    .map((num) => {
      if (num > 2 && num < 4) {
        return num;
      }
    });
    return result.filter((num) => num !== undefined);
};
console.log(abc(array1, array2, array3));
