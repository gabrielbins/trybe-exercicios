let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let numeros of numbers){
    if (numeros < menor){
        menor = numeros
    }
}

console.log(menor)