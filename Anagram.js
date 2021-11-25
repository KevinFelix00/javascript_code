// [November]/[Day 17]/[Javascript]/{Anagram.js}
/* Check to see if two provided strings are anagrams of each other. One String is an anagram of another if it uses the same character in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters in your program. Make use of Functions and Methods where necessory */

function anagram(str1, str2) {
    if (str1.lenth !== str2.lenth) return false;
    else {
        if (str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")) return "Anagram";
        else return "Not Anagram";
    }
}

console.log(anagram("hello", "olleh"));  // Anagram
console.log(anagram("ronak", "konar"));  // Anagram
