//Moving the negative elements to one side of array...

#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cout<<"Enter the size of array: "<<endl;
	cin>>n;
	
	int arr[n];
	
	for(int i=0; i<n; i++)
	{
	    cout<<"Enter the element: "<<endl;
	    cin>>arr[i];
	}
	
	int i=-1;
	int pivot = 0;
	
	for(int j=0; j<n; j++)
	{
	    if(arr[j]<pivot)
	    {
	        i++;
	        swap(arr[i],arr[j]);
	    }
	}
	
	for(int i=0; i<n; i++)
	{
	    cout<<arr[i]<<" ";
	}
	
	return 0;
	
}
