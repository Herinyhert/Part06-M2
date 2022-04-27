var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);
  // for(let i=0; i<startEl.children.length;i++){
  //   resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children[i]));
  // };
  for (const child of startEl.children){
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child))
    
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==='#') return 'id'
  if(selector[0]==='.') return 'class'
  if(selector.split('.').length > 1) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    selector =selector.slice(1)
    var matchFunction = function (el) {
      return (el.id === selector)
    };
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      let clases = element.className.split(' ');
      var array = [];
    
      for(var i = 0; i < clases.length; i++){
        if('.' + clases[i] === selector){
          array.push(clases[i])
        }
      } 
      if(array.length > 0){ return true}
      else {return false}
      };
    
    } else if (selectorType === "tag.class") {
      selector=selector.split('.')
      selector= selector[1]
        matchFunction = function (element) {
        let clases = element.className.split(' ');
        var array = [];
      
        for(var i = 0; i < clases.length; i++){
          if(clases[i] === selector){
            array.push(clases[i])
          }
        } 
        if(array.length > 0){ return true}
        else {return false}
        };
    } else if (selectorType === "tag") {
    var selector = 'div';
    var matchFunction = function (el) {
    return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
