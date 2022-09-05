let isAtivo = false
console.log(isAtivo)

isAtivo=true
console.log(isAtivo)

isAtivo=1
console.log(!isAtivo)// uma exclamação '!' indica false e duas '!!' indica true
// ou pode ser representado assim {console.log(!true ou !false)} a exclamação representa 'Não'

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')// espaço em branco 
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!! (isAtivo = true))
//console.log(!! (isAtivo = Infinity)) 

console.log('Os falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!'')//string vazia
console.log(!!'NaN')
console.log(!!undefined)
console.log(!! (isAtivo = false))

console.log('Para finalizar...')
console.log(!! (''||null||0||' '))// retorna true
console.log(''||null||0||'epa')// retorna o primeiro valor verdadeiro que ele encontra dessa expresão
