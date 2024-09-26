//assumption : when n < 0 return back n 

//recursive approach : o(n) time
var sum_to_n_a = function(n) {
    return n <= 1 ? n : sum_to_n_a(n - 1) + n
};

//iterative approach : o(n) time
var sum_to_n_b = function(n) {
    let  sum = 0;
    if (n < 0) {
        return n;
    }
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// using math sum = (n+1) * n/2 : o(1) time
var sum_to_n_c = function(n) {
    if (n <= 1) {
        return n;
    } 
    return (n + 1) * n / 2;
};


// all these is to test

// n = 5
console.log("when n = 5");
console.log("the 3 answers from 3 methods are " + sum_to_n_a(5) + ", " + sum_to_n_b(5) + ", " + sum_to_n_c(5));

// n = 10
console.log("when n = 10");
console.log("the 3 answers from 3 methods are " + sum_to_n_a(10) + ", " + sum_to_n_b(10) + ", " + sum_to_n_c(10));

//n = 1
console.log("when n = 1");
console.log("the 3 answers from 3 methods are " + sum_to_n_a(1) + ", " + sum_to_n_b(1) + ", " + sum_to_n_c(1));

//n = 0
console.log("when n = 0");
console.log("the 3 answers from 3 methods are " + sum_to_n_a(0) + ", " + sum_to_n_b(0) + ", " + sum_to_n_c(0));

//n = -1
console.log("when n = -1");
console.log("the 3 answers from 3 methods are " + sum_to_n_a(-1) + ", " + sum_to_n_b(-1) + ", " + sum_to_n_c(-1));
