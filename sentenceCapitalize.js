
function capitalize(text) {
     var wordsArray = text.toLowerCase().split(' ');
     var capsArray = wordsArray.map(word =>{
        return word[0].toUpperCase() + word.slice(1);
     })
    return capsArray.join(' ');
}

console.log(capitalize("hello world my name is junior"));