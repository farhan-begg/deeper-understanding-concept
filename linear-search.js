
// write a fucntion called linearSearch which accepts an array and 
//a value, and returns the index at which the value exists.
// If the value does not exist in the array return -1

// example linearSearch([10,15,13], 15) // 1

function linearSearch(arr, key){
    // iterates array 
      for(let i = 0; i < arr.length; i++){
          // checks if index of array matches key
          if(arr[i] === key){
              // return index if so
              return i
          }
      }
      return -1
  
    
  }
  console.log(linearSearch([10,15,13], 15))
  //O(n)