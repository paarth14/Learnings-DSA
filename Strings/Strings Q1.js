//String Anagram Problem

//Problem Statement - String anagram having 2 conditions :
// 1) Check whether the length of both the strings are same or not.
// 2) count of string 1 with string 2.

//Input :- ['hello','llheo']


function stringAnagram(string1,string2)
{
  if(string1.length !== string2.length)
  {
    return false;
  }
  
  let counter = {};
  
  for(let letter of string1)
  {
    counter[letter] = (counter[letter] || 0) + 1;
    // console.log(counter[letter]);
  }
  
  for(let items of string2)
  {
    if(!counter[items])
    {
      return false;
    }
    
    counter[items] -= 1;
  }
  
  return true;
}

let check = stringAnagram('hello','llheo');
console.log(check);

//Time Complexity : O(n).
