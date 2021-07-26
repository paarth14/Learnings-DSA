//Helper Recursive Function

//Problem Statement - Out off the array, we just have to identify the Odd numbers.

//Input :- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Output :- [1, 3, 5, 7, 9] - Question ?


function findOdd(array)
{

  let result = [];
  function helperRecursive(inputArray)
  {
    if(inputArray.length === 0)
    {
      return;
    }
    
    if(inputArray[0]%2 !== 0)
    {
      result.push(inputArray[0])
    }
    
    helperRecursive(inputArray.slice(1));
  }
  helperRecursive(array) //1st time calling
  return result;
  
}

const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
