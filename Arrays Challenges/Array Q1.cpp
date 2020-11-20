// Q1 - Max till i : Problem - Given an array of size n. for every i from 0 to n-1 output max(a[0], a[1],...,a[i]).

#include<bits/stdc++.h>
using namespace std;

int main()
{   
    int mx = -1999999;
    
    int n;
    cout<<"Enter the size of array: ";
    cin>>n;
    
    int arr[n];
    
    for(int i=0; i<n; i++)
    {
        cout<<"Enter the Element: ";
        cin>>arr[i];
    }
    
    for(int i=0; i<n; i++)
    {
        mx = max(mx, arr[i]);
        cout<<mx<<endl;
    }
    

    return 0;
    
}

// Enter the size of array: 6                                                                                                      
// Enter the Element: 0                                                                                                            
// Enter the Element: -9                                                                                                           
// Enter the Element: 1                                                                                                            
// Enter the Element: 3                                                                                                            
// Enter the Element: -4                                                                                                           
// Enter the Element: 5                                                                                                            
// 0                                                                                                                               
// 0                                                                                                                               
// 1                                                                                                                               
// 3                                                                                                                               
// 3                                                                                                                               
// 5 
