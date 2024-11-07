// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// // Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// // Sample Output:
// 15;
// ts-node-dev --respawn --transpile-only server.ts

let inputArray: number[] = [1, 2, 3, 4, 5];

function sumArray(arr: number[]): number {
  let total: number = arr.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );
  return total;
}

console.log(sumArray(inputArray));
