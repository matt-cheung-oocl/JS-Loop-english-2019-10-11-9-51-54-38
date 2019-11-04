for (var i = 1; i <= 9; i++) {
	var print='';
	for (var j = 1; j <= i; j++) {
		print += (i + "*" + j + "=" + (j * j) + ' ');
	}
	console.log(print);
}