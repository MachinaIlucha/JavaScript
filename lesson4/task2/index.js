let m = 10;
const n = 20;
let result = 1;


for (var i = m; m <= n; i++) {
	if (i % 2 === 1)
		res *= i;
}

console.log('Result: ' + result);