//Count largest sum of consecutive digits

//Problem Statement - We have to find the count of sum of consecutive digits from the array.

//Input :- [1, 2, 3, 4, 3, 5, 4, 6, 7, 8]

//Approach to Solve :- 
// 1) if Number > array --> Error message.
// 2) Suppose we decide Number = 4
// 3) So, largest sum of consecutive digits will be 25 (4, 6, 7, 8).
// 4) How many times will loop run :
// Total number in array -  Number choosen + 1 = 10 - 4 + 1 = 7


function findLargest(array,num)
{
  if(num>array)
  {
    throw new Error("Num should not be greater than array")
  }
  
  else
  {
    let max=0;
    for(let i=0; i<array.length - num + 1; i++)
    {
      let temp=0;
      for(let j=0; j<num; j++)
      {
        temp += array[i+j];
      }
      if(temp>max)
      {
        max = temp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8],4);
console.log(result);
