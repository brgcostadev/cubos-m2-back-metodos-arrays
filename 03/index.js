const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

/* 
Jeito mais facil

const filtraMaiorNumero = numeros.sort((a, b) => b - a)
console.log(filtraMaiorNumero[0]);

*/

const filtraMaiorNumero = (numeros) => {
    let filtro = numeros.reduce((a, b) => {
        let maior = a
        if (a < b) {
            return maior = b
        } else {
            return maior = a
        }
    })
    return console.log(filtro)

}

filtraMaiorNumero(numeros)