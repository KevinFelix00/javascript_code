/* write a program that an extract email from a string */

//  function for get emails id
function extractEmails(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
}

// test

console.log(extractEmails('hello, my email is: abc@gmail.com'))
