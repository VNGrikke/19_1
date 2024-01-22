function chunkArrayInGroups(arr, size) {
    let outerArray = [];
    let innerArray = [];
    for (let i = 0; i < arr.length; i += size) {
        innerArray = arr.slice(i, i + size);
        outerArray.push(innerArray);
    }
    return outerArray;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
