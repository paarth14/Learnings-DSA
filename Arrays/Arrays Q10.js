//Checking square in another array using map object

//Problem Statement - To check whether the square of numbers in one array is equivalent in another array or not.

//Input :- array1 = [1, 2, 3, 4] array2 = [1, 9, 4, 16] - Case 1
          // array1 = [1, 2, 4, 2] array2 = [1, 4, 4, 16] - Case 2

//Approach :- We will be creating 2 maps
// 1) map1 = {1:1,2:2,4:1}
// 2) map2 = {1:1,4:2,16:1}
// Conclusions => key(map1) == [key(map2)]^2
//               Value(map1) == Value(map1)
              


function checkSquare(array1,array2)
{
  let map1 = {};
  let map2 = {};
  
  for(item of array1)
  {
    map1[item] = (map1[item] || 0) + 1;
  }
  
  console.log("Map1",map1);
  
  for(item1 of array2)
  {
    map2[item1] = (map2[item1] || 0) + 1;
  }
  
  console.log("Map2",map2);
  
  for(let key in map1)
  {
    // console.log("key",key);
    if(!map2[key*key]) //Object key is checked in terms of square
    {
      return false;
    }
    if(map1[key] !== map2[key*key]) //value is compared
    {
      return false;
    }
    
  }
  
  return true;
}

const result = checkSquare([1, 2, 4, 2],[1, 4, 4, 16]);
console.log(result);
