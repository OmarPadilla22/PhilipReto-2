var carreritas = ["Lucia", "Roberto", "Maria", "Jesús", "Andrea", "José"];

console.log (carreritas);

carreritas.splice(4, 1,);
carreritas.splice(2, 0, "Andrea");
console.log(carreritas);

carreritas.splice(5,1);
console.log(carreritas);

carreritas.splice(1, 0, "Cristóbal", "Fernanda", "Armando");
console.log(carreritas);

carreritas.unshift("Federico");
console.log(carreritas);