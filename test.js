// Given two arrays a and b of numbers and a target value t, find a number from each array whose sum is closest to t.
// [1,2,3,4] t= 7 return 4
// [1,3,4,5] t=7 return 5

// compare each index to target value 


const needle = 8;

const closest = [1, 10, 7, 2, 4].reduce((a, b) => {
    return Math.abs(b - needle) < Math.abs(a - needle) ? b : a;
});


console.log(closest)