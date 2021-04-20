// Given an array a of n numbers and a count k find the k largest values in the array a.
// Example: a=[5, 1, 3, 6, 8, 2, 4, 7], k=3 ⇒ [6, 8, 7]



const findValue = (x, k) => {
   // x = [10,20,1,3] k = 3
    // 10, 20, 3
       // 
    const sortedArray = x.sort(function(a, b){return b-a}); 
 
    return sortedArray.slice(0,k )
        
}

findValue([10,20,30,5,2], 1)
console.log(findValue([10,20,30,5,2], 3))

const findValue2= (k) => {
    var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];
    for (var i = 1; i < Arr.length; i++)
        for (var j = 0; j < i; j++)
            if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
            }
    return (Arr.slice(-1 * k))
}
console.log(findValue2(3))
