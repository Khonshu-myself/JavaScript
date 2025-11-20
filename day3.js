const firstName = "John";
const lastName = "Doe";

console.log(`Hello, my name is ${firstName} ${lastName}.`);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log([...arr1, ...arr2]);

newArr.push(7);
console.log(newArr);
newArr.pop();
console.log(newArr);
newArr.shift();
console.log(newArr);
newArr.unshift(0);
console.log(newArr);

const mergeArrays = (array1, array2) => {
  return [...array1, ...array2].push;
}
console.log(mergeArrays([1, 2], [3, 4]));

