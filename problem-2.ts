{
  let inputArray: number[] = [1, 2, 2, 3, 4, 5];

  function removeDuplicates(arr: number[]): number[] {
    let uniqueArray: number[] = [];

    arr.forEach((element) => {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    });
    return uniqueArray;
  }

  console.log(removeDuplicates(inputArray));
}
