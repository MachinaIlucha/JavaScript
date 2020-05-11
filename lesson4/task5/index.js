let m = 4;
let n = 37;
let result = 0;
let res = 0;

for (var i = m; i <= n; i++) {
	if (i % 5 == 0) 
		console.log(i); 
	else if (i % 2 == 0 && i % 4 == 1 ) 
		res += i;
	else if (i % 3 == 0) 
		res -= i;
	else if (i % 4 == 0)
		res *= i;
}

result = res;