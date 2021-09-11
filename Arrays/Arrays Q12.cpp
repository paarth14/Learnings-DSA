//Write a Program that takes N elements (max. value of N is 100
// and N is the float number specified by user) from user, stores data
// in an array and Calculates the average of those numbers.

#include<iostream>
using namespace std;

int main()
{
    float count, sum=0;
    float average;
    
    cout<<"Enter the size of Array: "<<endl;
    cin>>count;
    
    float inputArray[100];
    
    cout<<"Enter "<<count<<" Elements"<<endl;
    
    for(int i=0; i<count; i++)
    {
        cout<<"Enter a number: ";
        cin>>inputArray[i];
    }
    
    for(int i=0; i<count; i++)
    {
        sum += inputArray[i];
    }
    
    average = (float)sum/count;
    
    cout<<"Average is: "<<average;
    
    return 0;

}
