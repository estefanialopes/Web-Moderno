const peso1= 1.1 //não é um valor inteiro
const peso2= Number('2.0') // é considerado um valor inteiro

console.log(peso1,peso2) //imprime peso1 e peso2
console.log(Number.isInteger(peso1)) //se for interiro retorna true, se não retorna false
console.log(Number.isInteger(peso2)) 

const avaliacao1 =9.871//atribui valores a variável
const avaliacao2=6.871

const total= avaliacao1 * peso1 + avaliacao2 * peso2 // o resultado das operações são armazenados na variável total e printado na tela
const soma=peso1+peso1 
const media=total/soma

console.log(media.toFixed(2)) // imprime o resutado da operação média com duas casas decimais apos a virgula
console.log(media.toString()) // imprime o valor original com todas as casas decimais armazenado na variavel média
console.log(media.toString(2))// o valor 2 transforma o valor de ponto flutuante em binário
console.log(typeof media) // retorna o tipo do valor armazenado na variavel média 
console.log(typeof Number)// é uma função 
