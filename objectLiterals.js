var myObj = {
	firstName : "khagesh",
	lastName : "Sailada",
	middleName : "Rao"
}

for(var prop in myObj) {
	console.log ( prop + ": " + myObj[prop]);
}