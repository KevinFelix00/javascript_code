/* write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. */

function arrayToList(list) {
     list[0] = {
        value: 1,
        rest1: {
            value: 2,
            rest2: {
                value: 3,
                rest3: null
            }
        }
    };
    return list;
}

console.log(arrayToList([1, 2, 3]));

/* write a listToArray function that produces an array from a list */

function listToArray() {
    var list = {
        val1: [1, 2, 3],
        list2: {
            val2: ['a', 'b', 'c']
        }
    };
    console.log(list.val1);
    console.log(list.list2.val2)
}

listToArray();
 
/* Then add helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns  the element at the given positon in the list (with zero referring to the first element) or undefined when there is no such element.   */

function helper(elt, list) {
    list.unshift(elt);  // Add first element in the list.
    var list1 =  [];    // create a new list
    list1.push(list);   // append the list to a new list.
    return list1[0];    // show the position of the element in the list.
}

console.log(helper(2, [{val1:3}, 3, {val2:'hello'}]));