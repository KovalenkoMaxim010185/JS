let cities = ["Днепр", "Киев", "Харьков"];
let population = [1000000, 	3000000, 500000];
var obj = {};
for(var i = 0; i < cities.length; i++) {
	obj[cities[i]] = population[i];
}
console.log(obj);