function largestOfArrs(...arrays) {
    let maxOfArr = [];
    for(let i = 0; i < arrays.length; i++){
        let max = arrays[i][0];
        for (let j = 0; j < arrays[i].length; j++) {
            if(max < arrays[i][j]){
                max = arrays[i][j];
            }
        }
        maxOfArr.push(max);
    }
    return maxOfArr;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [-1, -2, -3];
let arr3 = [5, 1, 2, 9];
let result = largestOfArrs(arr1, arr2, arr3);
console.log(result);
