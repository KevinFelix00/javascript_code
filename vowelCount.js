function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

const countVowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('cbdjsbhfuseiod'));
console.log(getVowels('cbdjsbhfuseiod'));