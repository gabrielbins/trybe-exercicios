let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0

for (let numeros of numbers){
    if (numeros%2 != 0){
        numerosImpares += 1
    }
}

if (numerosImpares === 0){
    console.log("Nenhum valor impar encontrado")
} 
else {
    console.log(numerosImpares)
}