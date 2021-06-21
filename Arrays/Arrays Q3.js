//Zero Sum Problem

//Problem Statement - To find the Sum of pair in array whose sum is zero.

//Input :- [-5, -4, -3, -2, 0, 2, 4, 6, 8]

//Output :- [?,?] - Question

//Array must be sorted


function getSumPairZero(array)
{
	for (let number of array)
	{
		for(let j=1; j<array.length; j++)
		{
		  if(number + array[j] == 0)
		  {
		    return [number,array[j]];
		  }
		}
	}
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// Output:
// [ -4, 4 ]

//Time Complexity :- O(n^2)
