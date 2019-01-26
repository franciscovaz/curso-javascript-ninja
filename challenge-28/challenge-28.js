 (function() { 
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

    function DOM( elements ) { // pode receber vários elementos
    this.element = document.querySelectorAll(elements); //todos os elementos que forem passados
  }

//para estender a lista!!!!!
    DOM.prototype.on = function on(eventType, callback) { //quando desparar o evento, a função callback é desparada
      Array.prototype.forEach.call(this.element, function() {
        element.addEventListener(eventType, callback, false);
      });
    }; 

//para estender a lista!!!!!
    DOM.prototype.off = function off(eventType, callback) {
      Array.prototype.forEach.call(this.element, function() {
        element.removeEventListener(eventType, callback, false);
      });
    };

//para estender a lista!!!!!
    DOM.prototype.get = function get() {
      return this.element;
    };

//Recebe os elements e faz um forEach
    DOM.prototype.forEach = function forEach() {
      return Array.prototype.forEach.apply( this.element , arguments );
    };

//Recebe os elements e faz um map
    DOM.prototype.map = function map() {
      return Array.prototype.map.apply( this.element , arguments );
    };

//Recebe os elements e faz um filter
    DOM.prototype.filter = function filter() {
      return Array.prototype.filter.apply( this.element , arguments );
    };

//Recebe os elements e faz um reduce
    DOM.prototype.reduce = function reduce() {
      return Array.prototype.reduce.apply( this.element , arguments );
    };

//Recebe os elements e faz um reduceRight
    DOM.prototype.reduceRight = function reduceRight() {
      return Array.prototype.reduceRight.apply( this.element , arguments );
    };

//Recebe os elements e faz um every
    DOM.prototype.every = function every() {
      return Array.prototype.every.apply( this.element , arguments );
    };

//Recebe os elements e faz um some
    DOM.prototype.some = function some() {
      return Array.prototype.some.apply( this.element , arguments );
    };


//ver se é Array
    DOM.prototype.isArray = function isArray() {
      return Object.prototype.toString.call( param ) === '[object Array]';
    };

    //var dom = new DOM;
    //console.log( dom.isArray([1 , 2 , 3]) );

//ver se é Object
    DOM.prototype.isObject = function isObject() {
      return Object.prototype.toString.call( param ) === '[object object]';
    };

    //var dom = new DOM;
    //console.log( dom.isObject({}) );.

//ver se é Function
    DOM.prototype.isFunction = function isFunction() {
      return Object.prototype.toString.call( param ) === '[object Function]';
    };

    //var dom = new DOM;
    //console.log( dom.isFunction() );

//ver se é Number
    DOM.prototype.isNumber = function isNumber() {
      return Object.prototype.toString.call( param ) === '[object Number]';
    };

    //var dom = new DOM;
    //console.log( dom.isNumber(3) ); 

//ver se é String
    DOM.prototype.isString = function isString() {
      return Object.prototype.toString.call( param ) === '[object String]';
    };

    //var dom = new DOM;
    //console.log( dom.isString() );    

//ver se é Boolean
    DOM.prototype.isBoolean = function isBoolean() {
      return Object.prototype.toString.call( param ) === '[object Bollean]';
    };

    //var dom = new DOM;
    //console.log( dom.isBoolean() );   

//ver se é Null
    DOM.prototype.isNull = function isNull() {
      return Object.prototype.toString.call( param ) === '[object Null]'
      || Object.prototype.toString.call( param ) === '[object Undefined]';
    };


    var $formCEP = new DOM('[data-js="form-cep"]'); //já temos o form
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]'); 
    var ajax = new XMLHttpRequest();
    
    $formCEP.on('submit' , handleSubmitFormCEP); //quando temos um evento, vamos maniplá-lo, logo vamos criar uma função

    function handleSubmitFormCEP( event ) {
      event.preventDefault();
      var url = getUrl();
      ajax.open('GET', url );
      ajax.send();
      getMessage('loading');
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    } 


    function getURL() {
      return replaceCEP('http://apps.widenet.com.br/busca-cep/api/[CEP].json');
    }

    function clearCEP() {
      return $inputCEP.get()[0].value.relace(/\D/g, '');
    }


    function handleReadyStateChange() {
      if( isRequestOk() ) {
        getMessage('ok');
        fillCEPFields(); //preenche os dados do Request
      }
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }


    function fillCEPFields() {
      var data = parseData();
      if(!data){
        getMessage('error');
        data = clearData();
      }

      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.estado;
      $cidade.get()[0].textContent = data.cidade;
      $cep.get()[0].textContent = data.cep;

    }


    function clearData() {
      return {
        logradouro: '-',
        bairro: '-',
        estado: '-',
        cidade: '-',
        cep: '-'
      }
    }

    function parseData() {

      var result;
      try {
        result = JSON.parse(ajax.responseText);
      }
      catch(e) {
        result = null;
      }
      return result;
    }

    function getMessage( type ) {
      var messages = {
        loading: replaceCEP('Buscando informações para o CEP ...'),
        ok: replaceCEP('Endereço referente ao CEP '),
        error: replaceCEP('Não encontramos o endereço para o CEP')
      };

      $status.get()[0].textContent = messages[type];
    }

    function replaceCEP(message) {
      return message.replace('[CEP]', clearCEP());
    }

    

})();