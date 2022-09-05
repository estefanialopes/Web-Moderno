const valores = [7.7,8.9,6.3,9.2]


console.log(valores[0], valores[3])//7.7 9.2
console.log(valores[4])//undefined
valores[10]=10
console.log(valores)//[ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]
console.log(valores.length)//11
valores.push({id:3},false,null,'teste')//adiciona esses valores ao array podendo ter um array com valores de varios tipos
console.log(valores)
console.table(valores)//tabela
console.log(valores.pop())
delete valores[0] //exclui um elemento do array
console.log(valores)
console.log(typeof valores) //printa o tipo do array
