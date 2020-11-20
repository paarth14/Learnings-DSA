//finding minimum and maximum element in an array

#include<iostream>
#include<climits>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the size of array: ";
    cin>>n;
    
    int arr[n];
    
    for(int i=0; i<n; i++)
    {
        cout<<"Enter the element: ";
        cin>>arr[i];
    }
    
    int maxNo = INT_MIN; //min value of a variable possible in c++.
    int minNo = INT_MAX; //max value of a variable possible in c++.
    
    for(int i=0; i<n; i++)
    {
        maxNo = max(maxNo, arr[i]);
        minNo = min(minNo, arr[i]);
    }
    
    cout<<maxNo<<" "<<minNo;
    
    return 0;
}
