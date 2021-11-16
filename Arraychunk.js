const chunk = function (array, size){
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);  // Pull a copy of a portion of an array
    
    return [head, ...chunk(tail, size)];
};

console.log(chunk([1,2,3,4,5,6], 2));  // [[1,2],[3,4],[5,6]]
