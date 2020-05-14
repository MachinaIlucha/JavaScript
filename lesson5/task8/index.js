function compareSums(a, b, c ,d){
	return sum(a,b) > sum(c,d) ? true : false;
}

function sum(from, to){
	let sum = 0;
	for (var i = from; i <= to; i++) {
		sum += i;
	}
	return sum;
}