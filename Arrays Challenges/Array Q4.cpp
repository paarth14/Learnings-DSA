//Array Q4 - Record Breaker - Isyana Given number of visitors in local theme park in N consecutive days. Please Help Isyana find out number of record breaking days. {Google kickstart)

#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the size of array: ";
    cin>>n;
    
    int a[n+1];
    a[n] = -1; 
    
    for(int i=0; i<n; i++)
    {
        cout<<"Enter the number: ";
        cin>>a[i];
    }
    
    if(n==1)
    {
        cout<<"1"<<endl;
        return 0;
    }
    
    int ans = 0;
    int mx = -1;
    
    for(int i=0; i<n; i++)
    {
        if(a[i]>mx && a[i]>a[i+1])
        {
            ans++;
        }
        
        mx = max(mx, a[i]);
    }
    
    cout<<ans<<endl;
    
    return 0;
}

// Enter the size of array: 8                                                                                                      
// Enter the number: 1                                                                                                             
// Enter the number: 2                                                                                                             
// Enter the number: 0                                                                                                             
// Enter the number: 7                                                                                                             
// Enter the number: 2                                                                                                             
// Enter the number: 0                                                                                                             
// Enter the number: 2                                                                                                             
// Enter the number: 2                                                                                                             
// 2    
