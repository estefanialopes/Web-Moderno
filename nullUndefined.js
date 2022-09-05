let valor // não inicializada retorna undefined
console.log(valor)

valor=null//ausência de valor, não aponta para nenhum local de memoria 
console.log(valor)

//console.log(valor.toString())//Error

const produto={}
console.log(produto.preco)

console.log(produto)
 produto.preco=3.50
console.log(produto)

produto.preco=undefined //evite atribuir undefined
console.log(!!produto.preco)//bolean False
//delete produto.preco
console.log(produto)

produto.preco=null //sem preco
console.log(!!produto.preco) //False
console.log(produto)// retorna preco:null
