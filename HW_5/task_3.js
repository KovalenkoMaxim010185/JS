let cities = ['Dnipro', 'Kyiv', 'Lviv'];
let population = [100000, 	1500000, 800000];
var drop = new Object;
for(var i = 0; i < cities.length; i++) {
	drop = [cities[i]] + [population[i]];
}
alert(drop);