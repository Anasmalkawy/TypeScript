let num: number = 10;
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


let prices: number[] = [10, 110, 200, 30, 500];
let line: number = 100;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > line) {
        console.log("Expensive Price: " + prices[i]);
    }
}


let sum: number = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
console.log("Total Sum: " + sum);
