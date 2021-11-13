const chunk = function (array, size){
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    
    return [head, ...chunk(tail, size)];
};

console.log(chunk([1,2,3,4,5,6], 2));