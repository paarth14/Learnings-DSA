//Subarray and subsequences

//Array Q2 - Sum of all subarrays : Problem - Given an array of size n. Output sum of each subarray of the given array.

#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the size of array: ";
    cin>>n;
    
    int arr[n];
    
    for(int i=0; i<n; i++)
    {
        cout<<"Enter the number: ";
        cin>>arr[i];
    }
    
    int curr = 0;
    
    for(int i=0; i<n; i++)
    {
        curr = 0;
        for(int j=i; j<n; j++)
        {
            curr += arr[j];
            cout<<curr<<endl;
        }
    }
    
    return 0;
}

// Enter the size of array: 5                                                                                                      
// Enter the number: 1                                                                                                             
// Enter the number: 2                                                                                                             
// Enter the number: 0                                                                                                             
// Enter the number: 7                                                                                                             
// Enter the number: 2                                                                                                             
// 1                                                                                                                               
// 3                                                                                                                               
// 3                                                                                                                               
// 10                                                                                                                              
// 12                                                                                                                              
// 2                                                                                                                               
// 2                                                                                                                               
// 9                                                                                                                               
// 11                                                                                                                              
// 0                                                                                                                               
// 7                                                                                                                               
// 9                                                                                                                               
// 7                                                                                                                               
// 9                                                                                                                               
// 2 
