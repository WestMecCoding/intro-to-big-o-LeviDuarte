// create a function that will take an 
//argument that stands for a maximum integer
// you want to count to

// initialize a starting valiu for the total sum

// run a loop that starts at the first number
// and counts up to the maximum
// sum the numbers in the loop

// return the final total sum 
// log the final result

function linearSum(n){
    let sum = 0;


    for(let i = 1; i <= n; i++){
        sum += i;

    }
    return sum;
}

console.log(linearSum(100));