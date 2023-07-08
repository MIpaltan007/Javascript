console.clear()

/*var m={
    "p1":"350 kmph",
    "gallardo":"320 kmph"
}
console.log(m)
console.log(typeof(m))*/

var mAgera = {
	name: "Agera",
	manufacturer: {
		name: "Koenigsegg",
		loaction: "Sweden"
	},
	topSpeed: 429,
	color: "Black",
	spoilers: false,
	applyBrakes: function() {
		setTimeout(function() {
			console.log('Car Stopped');
		}, 5000)
	}
}

console.log(mAgera.name)
console.log(mAgera.topSpeed)
console.log(mAgera.manufacturer)
console.log(mAgera.manufacturer.name)
console.log(mAgera.applyBrakes())
console.log(mAgera.applyBrakes)