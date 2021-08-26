const a = 50;
const b = -5;
const c = 100;
let verificacao;

if (a<0||b<0||c<0){
    console.log("error")
}
else if (a+b+c === 180) {
    verificacao = true
}
else {
    verificacao = false
}
console.log(verificacao)