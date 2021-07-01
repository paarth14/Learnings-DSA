//Divide & Conquer Problem

//Problem Statement - Find the index of given number in a sorted array.
//Assumed Number : 7
//Array is sorted.

//Input :- [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//Output :- Index is 6

//Approach :- min = 0, element = 1
//max = array.length-1, element = 15
//minIndex = (min + max)/2 => (0+14)/2 = 7 => element = 8
//if array[midIndex] < number, then, min = midIndex + 1
//else if arr[midIndex] > number, then, max = midIndex - 1


function searchAlgo(array,num)
{
  
  let min = 0;
  let max = array.length-1;
  
  while(min<=max)
  {
    let midIndex = Math.floor((min + max)/2);
    
    if(array[midIndex] < num)
    {
      min = midIndex + 1;
    }
    
    else if(array[midIndex] > num)
    {
      max = midIndex - 1;
    }
    
    else
    {
      return midIndex;
    }
  
  }
  
}

const result = searchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],7);
console.log(result);

//Time Complexity :- O(logn) - {Binary}
