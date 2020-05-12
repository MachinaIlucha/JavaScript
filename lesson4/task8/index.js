let sum = 0;

for (var i = 1; i <= 1000; i++) {
	sum += i;
}

let c = sum % 1234;
let x = sum / 1234;

console.log(x > c ? true : false);