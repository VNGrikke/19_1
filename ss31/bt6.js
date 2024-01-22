function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return arr[i];
        }
    }
    return undefined;
}
    const numbers = [1, 2, 3, 4, 5];
    const oddNumber = fakeFind(numbers, function (element) {
    return element % 2 !== 0;
});
console.log(oddNumber);
const divisibleBy7 = fakeFind(numbers, function (element) {
return element % 7 === 0;
});
console.log(divisibleBy7);
  