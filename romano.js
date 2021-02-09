function teste(romano) {
	let n = 0;

	let romanoUpper = romano.toUpperCase();

	let numeros = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}

	for (var i = 0; i < romanoUpper.length; i++) {

		let atual = romanoUpper[i];
		let prox = romanoUpper[i+1];

		if (prox && numeros[prox] > numeros[atual]){
			n -= numeros[atual];
		}else{
			n += numeros[atual];
		}
	}

	return romanoUpper + "=" + n
}
