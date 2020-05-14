function findDivCount(a, b, n) {
	let count = 0;
	for (var i = a; i <= b; i++) {
		if (i % n == 0) 
			count++;
	}
	return count;
}