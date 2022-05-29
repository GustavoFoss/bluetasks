
/*
const v1 = 40.5;
const v2 = 30;
const v3 = false;
const v4 = "olá softblue";
const v5 = "eu tenho " + v2 + " anos";
let v6 = `eu tenho ${v2} anos`
console.log(v6)
*/

/*
const x = 10;
const y = 9;

if (x !== y)
    console.log("verdadeiro");*/

/*const numeros = [1, 2, 3, 4];

console.log(numeros[2])
*/

/*
const c = {
    cor : "azul",
    ano : 2010
};



const carros = [
    {
        cor : "azul",
        ano : 2010
    },
    {
        cor : "red",
        ano : 2015
    }
]

console.log(carros[carros.length - 1].ano);

*/

/*
const letters = ["a", "b", "c"];

console.log(...letters);

const pessoa = {
    nome : "joao",
    idade : 5
}

const outro = {
    ...pessoa,
    hand: "left"
}

console.log(outro);
*/

/*
function print(msg) {
    console.log(msg);
}

const print2 = (msg) => console.log(msg)
const print3 = () => console.log("gayzao");
const print4 = (a, b) => a * b;


print2("gay");
print3();
print4(5,8);
*/

/*
class Carro {

    constructor() {
        this.velAtual = 0;
    }

    acelerar(v) {
        this.velAtual += v;
    }

    velocidade() {
        return this.velAtual;
    }
}

const carro = new Carro();

carro.acelerar(6);

console.log(carro.velocidade());
*/

/*
const multiplicar = (a, b) => a * b;

function processar(v1, v2, op) {
    return op(v1, v2);
}

const res = processar(4, 5, (a, b) => a + b);

console.log(res);

const numeros = [1,2,3,5];

console.log(numeros.map(v => v * 2));

console.log(numeros.filter(v => v % 2 !== 0));
*/

/*
const letras = ["A","B", "C"];

const [letra1,letra2,letra3] = letras;

const carro = {
    modelo : "fusca",
    ano : 1992,
    motoristas : ["pedro", "gay"]
}

const {motoristas, modelo} = carro;

console.log(modelo)
console.log(motoristas);
*/