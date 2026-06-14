function makeMultiplier(multiflier) {

	return (
		function (x) {
		return multiflier * x;

	} )
}


var doubleAll = makeMultiplier (2);

console.log ( doubleAll (80));