(function( win, doc ) { 
	'use strict';
	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:

	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;

	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	var $input = doc.querySelector('[data-js="input"');
	var $buttonsNumbers = doc.querySelectorAll( '[data-js="button-number"]');
	var $buttonCE = doc.querySelector('[data-js="ce"]');
	var $buttonEqual = doc.querySelector('[data-js="equal"]');
	var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');

	//console.log($buttonsNumbers);
	Array.prototype.forEach.call($buttonsNumbers , function(button) {
		console.log(button); //vai buscar todos os butoes

		button.addEventListener('click' , handleClickNumber, false);
	});

	Array.prototype.forEach.call($buttonsOperations , function(button) {
		console.log(button); // vai buscar todas as operações

		button.addEventListener('click' , handleClickOperation, false);
	});


	$buttonCE.addEventListener('click' , handleClickCE , false);
	$buttonEqual.addEventListener( 'click' , handleClickEqual, false);


	function handleClickNumber() {
		console.log(this.value); //this é o proprio botao
		$input.value += this.value;
	}

	function handleClickOperation() {
		
		$input.value = removeLastItemIfItIsAnOperator($input.value);
		$input.value += this.value;
	}

	function handleClickCE( event ) {
		$input.value = 0;	
	}

	function handleClickEqual( event ) {
		$input.value = removeLastItemIfItIsAnOperator($input.value);
		var allValues = $input.value.match(/\d+[+*/-]?/g); //match vai passar para Array 
		// faz so agrupamento em vez de captura (?:)
		$input.value = allValues.reduce(function(accumulated, actual) {
			var firstValue = accumulated.slice(0, -1);
			var operator = accumulated.split('').pop(); //P/ pegar o ultimo valor
			var lastValue = removeLastItemIfItIsAnOperator(actual);
			var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
			switch(operator) {
				case '+':
					return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
				case '-':
					return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
				case '*':
					return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
				case '/':
					return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
			}
		});
	}

	function isLastItemAnOperation (number) {
		var operations = ['+' , '-' , '*' , '/'];
		var lastItem = number.split('').pop(); //coloca num array e o pop vai agarrar o last item
		return operations.some(function(operator) { //passa por todos os items do array e verifica se algum é igual a 
			return operator === lastItem;
		});
		console.log(lastItem);
	}

	function removeLastItemIfItIsAnOperator(number) {
		if( isLastItemAnOperation(number) )
			return number.slice(0, -1);
		return number;
	}

})( window , document );