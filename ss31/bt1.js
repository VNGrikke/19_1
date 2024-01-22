function findLongestWord(arr) {
    let words = arr.split(' ');
    let longestWord = words[0];
    let max = [words[0].length];
    for (let i = 0; i < words.length; i++) {
        if (max < words[i].length) {
            max = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}
let arr = 'mai nghỉ học đi chơi'
let check = findLongestWord(arr);
console.log(check+`: `+check.length);