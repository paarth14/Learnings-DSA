//Transportation - Problem

// Problem Statement - You are making a program for a bus service. 
// A bus can transport 50 passengers at once. 
// Given the number of passengers waiting in the bus station as input, 
// you need to calculate and output how many empty seats the last bus will have.

//Sample Input: 126, Sample Output: 24

// Explanation: The first bus will transport 50 passengers, leaving 126-50=76 in the station. 
// The next one will leave 26 in the station, thus, the last bus will take all of the 26 passengers, 
// having 50-26=24 seats left empty.

/*Your Code Starts here...*/

#include<bits/stdc++.h>
using namespace std;

int main() {

    int a; //a--> means total passengers
    cin>>a;

    int b = 50 - a%50; //b--> means remaing seats in last bus

    cout<<b<<endl;
    
    return 0;
}
