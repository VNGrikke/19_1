function confirmEnding(arr,subArr) {
    let words = arr.split(' ');
    let subWord = words[words.length - 1];
    let check = true;
    let checkWord = [];
    for (let i = subWord.length - subArr.length; i < subWord.length; i++) {
        checkWord += subWord[i];
    }
    if(checkWord !== subArr){
        check = false;
    }
    return check;
}

let arr = 'Hello world';
let subArr = 'orld';
let check = confirmEnding(arr,subArr);
console.log(check);