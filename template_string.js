const  nome= 'Rebeca'
const concatenacao= 'Olá'+ nome + '!' // concatena a string 'Olá' a string 'Rebeca' e a string '!' 
const template=`
              Olá
              ${nome}!`
console.log(concatenacao,template)//imprime a string 'Olá' e na linha abaixo a string 'Rebeca!'

//expressoes...
console.log(`1+1 = ${1+1}`)//mostra a expresão matematica e o resultado

const up= texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)//deixa a palavra cuidado em maiusculo "CUIDADO"