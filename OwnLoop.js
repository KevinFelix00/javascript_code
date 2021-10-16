/* write a higher function loop that provides something like a for loop statement. it takes a value, a test function, an update function, and a body and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning. */

function test(greeting) {
    "use strict";
    if (greeting != undefined) {
        function body(currentvalue) {
            currentvalue = greeting;
            return update("kevin");

            function update(name) {
                var newValue = `${greeting} ${name}`;
                return newValue;
            }
        }

        //   console.log(greeting);
        //     console.log(body());
        return body();
 
    } else return false;
}

console.log(test('hello'))
// test("hello");


