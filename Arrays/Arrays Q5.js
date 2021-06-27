//Count Unique Numbers Problem

//Problem Statement - We have to find the unique numbers from array and store them in a new array & have a count of that array.

//Input :- [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8]

//Approach to Solve :- 
// 1) Array must be sorted.
// 2) Initially i=0 & j=1 (index).
// 3) If arr[i]!==arr[j], then a) i++ & b) arr[i]=arr[j].
// 4) Final array will recieve, arr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 7, 8, 8] , count = 8.


function countUnique(array)
{
  if(array.length>0)
  {
    let i=0;
    for(let j=1; j<array.length; j++)
    {
      if(array[i]!==array[j])
      {
        i++;
        array[i] = array[j];
      }
    }
    return i+1;
  }
  
  else
  {
    throw new Error("Array is empty");
  }
  
}

const result = countUnique([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8]);
console.log(result)

//Time complexity: O(n)
