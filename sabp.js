// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.



    //[3,1,2,4]
    //[4,1,2,3]
    //[4,2,1,3]

// Space Complexity = O(1)
// Time Complexity = O(n)


const sortArrayByParity = (A)  => {
    
    let leftIndex = 0
    let rightIndex = A.length - 1;
    
    while(leftIndex < rightIndex) {
        // left index is not an even number
        while(A[leftIndex] % 2 === 0 && leftIndex < rightIndex) {
            // increase left index by 1
            leftIndex += 1;      
        }
         while(A[rightIndex] % 2 !== 0 && leftIndex < rightIndex) {
            // decrease right index by 1
            rightIndex -= 1;      
    }
        if (leftIndex < rightIndex) {
         const temp = A[leftIndex]
            A[leftIndex] = A[rightIndex]
            A[rightIndex] = temp;
            
             leftIndex += 1;   
             rightIndex -= 1;   

            
        }
    
    }
    return A

};
