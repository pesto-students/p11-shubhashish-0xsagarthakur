// Put your solution here

const divideArray = (numbers) => {
    let evenNums = [];
    let oddNums = [];

    for(let i=0; i<numbers.length; i++){
       numbers[i]%2===0 ? evenNums.push(numbers[i]) : oddNums.push(numbers[i]);
    }
    console.log("Even numbers:");
    evenNums == "" ?  console.log("None") : console.log(evenNums.sort());
    console.log("Odd numbers:");
    oddNums == "" ?  console.log("None") : console.log(oddNums.sort());
}

let nums = [4, 2, 9, 1, 8];
divideArray(nums);

// let nums = [4, 2, 8];
// divideArray(nums);
