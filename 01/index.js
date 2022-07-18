const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const crescente = numeros.sort((a, b) => a - b)
console.log(crescente)

const decrescente = numeros.sort((a, b) => b - a)
console.log(decrescente)

const unicode = numeros.sort()
console.log(unicode)