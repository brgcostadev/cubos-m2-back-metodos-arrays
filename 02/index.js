const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

/* 
eito mais facil 
const filtraCidade = cidades.sort((a, b) => b.length - a.length)

console.log(filtraCidade[0])
*/

const filtraMaiorCidade = (cidades) => {
    let filtro = cidades.reduce((a, b) => {
        let maiorCidade = a
        if (a.length < b.length) {
            return maiorCidade = b
        } else {
            return maiorCidade = a
        }
    })
    return console.log(filtro)

}

filtraMaiorCidade(cidades)