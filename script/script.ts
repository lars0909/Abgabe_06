const people_frankreich = 65300000;
const people_2003_frankreich = 62240000;
const frankreich = "Frankreich";
const people_deutschland = 83100000;
const people_2003_deutschland = 82530000;
const deutschgland = "Deutschland"
const people_oesterreich = 8900000;
const people_2003_oesterreich = 8121000;
const oesterreich = "Österreich";
const people_italien = 59070000;
const italien = "Italien";
const people_2003_italien = 57310000;
const people_eu = 447700000;

console.log("in " + frankreich +" leben " + people_frankreich + " Menschen.")
console.log("In " + frankreich + " leben " + (people_frankreich - people_2003_frankreich) + " mehr Menschen als in 2003.")
console.log("Seit 2003 ist die Wachstumsrate: " +(( people_frankreich/ people_2003_frankreich - 1) * 100)+"%")
console.log("Von der gesamten EU leben " + (people_frankreich/ people_eu * 100) + "% in " + frankreich)

console.log("in " + deutschgland +" leben " + people_deutschland + " Menschen.")
console.log("In " + deutschgland + " leben " + (people_deutschland - people_2003_deutschland) + " mehr Menschen als in 2003.")
console.log("Seit 2003 ist die Wachstumsrate: " +(( people_deutschland/ people_2003_deutschland - 1) * 100)+"%")
console.log("Von der gesamten EU leben " + (people_deutschland/ people_eu * 100) + "% in " + deutschgland)

console.log("in " + oesterreich +" leben " + people_oesterreich + " Menschen.")
console.log("In " + oesterreich + " leben " + (people_oesterreich - people_2003_oesterreich) + " mehr Menschen als in 2003.")
console.log("Seit 2003 ist die Wachstumsrate: " +(( people_oesterreich/ people_2003_oesterreich - 1) * 100)+"%")
console.log("Von der gesamten EU leben " + (people_oesterreich/ people_eu * 100) + "% in " + oesterreich)

console.log("in " + italien +" leben " + people_italien + " Menschen.")
console.log("In " + italien + " leben " + (people_italien - people_2003_italien) + " mehr Menschen als in 2003.")
console.log("Seit 2003 ist die Wachstumsrate: " +(( people_italien/ people_2003_italien - 1) * 100)+"%")
console.log("Von der gesamten EU leben " + (people_italien/ people_eu * 100) + "% in " + italien)