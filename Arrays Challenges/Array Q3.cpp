//Array Q3 - Arithmetic Array - Problem - Saraswati has N non negative integers. Help her to find the length of longest contigous arithmetic array. (Google Kickstart)


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
        cout<<"Enter the element: ";
        cin>>arr[i];
    }
    
    int ans = 2;
    int pd = arr[1] - arr[0];
    int j = 2;
    int curr = 2;
    
    while(j<n)
    {
        if(pd==arr[j]-arr[j-1])
        {
            curr++;
        }
        
        else
        {
            pd = arr[j] - arr[j-1];
            curr = 2;
        }
        
        ans = max(ans,curr);
        j++;
    }
    
    cout<<ans<<endl;
    
    return 0;
}

// Enter the size of array: 7                                                                                                      
// Enter the element: 10                                                                                                           
// Enter the element: 7                                                                                                            
// Enter the element: 4                                                                                                            
// Enter the element: 6                                                                                                            
// Enter the element: 8                                                                                                            
// Enter the element: 10                                                                                                           
// Enter the element: 11                                                                                                           
// 4 
