(function(win) { 

'use strict';

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

win.DOM = DOM;
})(window );