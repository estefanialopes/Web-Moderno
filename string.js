const escola= "cod3r"

console.log(escola.charAt(4))// retorna r

console.log(escola.charAt(6))// retorna um valor vazio, pois n existe um caracter de indice 6

console.log(escola.charCodeAt(3))// retorna o valor 51 que corresponde a 3 na tabela ASCII

console.log(escola.indexOf('3'))//  verifica se existe o valor 3 na string e retorna o valor 3 caso ele exista
// se eu subistituir o 3 por 2 ele retorna -1 para indicar que o elemento procurado não existe na string

console.log(escola.substring(1))// printa a string apartir do indice 1
console.log(escola.substring(0,3))// printa a string  apartir do indice 0 ate o indice 3 mas sem incluir o caracter do indice 3

console.log('Escola'.concat(escola).concat("!"))//concatena a palavra escola com a string ou substituir concat por '+'

console.log(escola.replace(3, 'e'))//troca o elemento '3' do indice 3 pelo elemento 'e'
console.log(escola.replace(/\d/, 'e'))// regex expressoes regulares(/\w\,g 'e') imprime e em toda strig

console.log('Maria, Pedro, Ana'. split (','))// separa os elementos da frase separados por virgula transformando em um array de strings
console.log('Maria, Pedro, Ana'. split (/,/))//faz a mesma coisa que o codigo acima se substituir ',' por '.' o codigo substitui tudo dentro da string por ','




