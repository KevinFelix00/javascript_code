// [November]/[Day 17]/[Javascript]/{Anagram.js}
function anagram(str1, str2) {
    if (str1.lenth !== str2.lenth) return false;
    else {
        if (str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")) return "Anagram";
        else return "Not Anagram";
    }
}

console.log(anagram("hello", "olleh"));
console.log(anagram("ronak", "konar"));