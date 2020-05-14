function getSum(start, end){
	let sum = 0;
	for (var i = start; i < end; i++) {
		if (i % 2 == 0) 
			sum += i;
	}
	return sum;
}