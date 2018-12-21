/*
Envolva todo o código desse desafio em uma IIFE.
*/

( function() { 

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/

var arr = [ 1 , 'Francisco' , 2 ];

console.log( 'O array em formato de string é:' );
console.log(arr.toString());

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
//De Portugal :D
var sul = [ 'Faro' , 'Lagos' , 'Aljezur' ];
var sudeste = [ 'Sagres' , 'Évora' , 'Tavira'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/

var portugal = sul.concat(sudeste);
console.log( '\nAlguns Estados do Brasil:' );
console.log(portugal);

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
console.log( '\nMais estados adicionados:' );
portugal.unshift('Aveiro' , 'Porto' , 'Viana do Castelo')
console.log(portugal);

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );

console.log(portugal.shift());

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
//Usar slice()

//console.log(portugal);
var newSul = portugal.slice(2);

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
console.log(newSul);

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
console.log(portugal);

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = [ 'Guarda' , 'Bragança' , 'Castelo Branco' ];

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
console.log(nordeste);
/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/

var newSudeste = portugal.splice(2);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/


portugal = portugal.concat( nordeste ); 
console.log('Depois de Add: ' + portugal);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
console.log(newSudeste);

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
console.log(portugal);

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/

var newPortugal = [];
portugal.forEach(function(item,index,array){
	newPortugal.push({
		id: index, 
		estado: item
	});
	//console.log('newPortugal: ' + newPortugal);
});

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewPortugal:' );

	console.log(newPortugal);


/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/

console.log('PORTGAL: ' + portugal);
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );


var every = portugal.every(function(item){
	return item.length > 7;
});
if(every === true)
	console.log('Sim, todos os estados tem mais de 7 letras!');
else
	console.log('Nem todos os estados tem mais de 7 letras!');

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
var some = portugal.some(function(item){
	return item === 'Ceará';
});

if(some === true)
	console.log('Ceará está incluído!');
 else
 	console.log('Ceará não foi incluído');

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = newPortugal.map(function(item, index){
	return {
		id: item.id++,
		estado: item.estado += ' pertence a Portugal'
	}
});



/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
console.log(map);

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
var filter = map.filter(function(item , index){
	return item.id % 2 === 0;
});


/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
console.log(filter);


}());
