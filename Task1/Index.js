var num = 10;
if (num % 2 === 0) {
    console.log(num + " is Even");
}
else {
    console.log(num + " is Odd");
}
var prices = [10, 110, 200, 30, 500];
var line = 100;
for (var i = 0; i < prices.length; i++) {
    if (prices[i] > line) {
        console.log("Expensive Price: " + prices[i]);
    }
}
var sum = 0;
for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
}
console.log("Total Sum: " + sum);
