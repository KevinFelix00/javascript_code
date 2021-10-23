/* Find the smallest positive integer, not in given an array of numbers ? */

var firstMissingPositive = function (nums) {
    var swap = function (i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };
    for (let i = 0; i < nums.length; i++){
        while (0 < nums[i] && nums[i] - 1 < nums.length && nums[i] != nums[nums[i] - 1]) {
            swap(i, nums[i] - 1);
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};

var A = [1, 3, 6, 4, 1, 2];

console.log(firstMissingPositive(A));   // 5
