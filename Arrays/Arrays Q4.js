//Find Sum Problem

//Problem Statement - To find the Sum of pair in array whose sum is zero.

//Input :- [-5, -4, -3, -2, 0, 2, 4, 6, 8]

//Output :- [?,?] - Question

//Approach :- Two Pointer approach : Left & Right pointer at (0 and n-1) respectively. If sum>0 --> right-- & sum<0 --> left++.


function findSum(array)
{
  let left = 0;
  let right = array.length-1;
  
  while(left < right)
  {
    sum = array[left] + array[right];
    
    if( sum == 0)
    {
      return [array[left],array[right]];
    }
    
    else if(sum>0)
    {
      right--;
    }
    
    else
    {
      left++;
    }
  }
}

const result = findSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// Output:
// [ -4, 4 ]

//Time Complexity :- O(n)
