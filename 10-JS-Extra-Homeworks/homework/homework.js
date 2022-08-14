// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  function convierteAmatriz(objeto) {  
    var array = [];

    for (var clave in objeto) {
      array.push([clave, objeto[clave]]);
    }
    return array;
  }
  return convierteAmatriz(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  function cuantosCaracteres(string) {
    var resultado = {};

    string.split('').forEach( 
      function(i) {
        resultado[i] ? resultado[i]++ : resultado[i] = 1;
      }
    )
    return resultado;
  }
  return cuantosCaracteres(string);  
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  function MayusculasAlPrincipio(s) {
    var mayuscula = '';
    var minuscula = '';

    for (var i = 0 ; i < s.length ; i++) {
      if (s[i] === s[i].toUpperCase()) {
        mayuscula += s[i];
      }
      else minuscula += s[i];
    }  
    return mayuscula + minuscula;
  }
  return MayusculasAlPrincipio(s);
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  function palabrasAlReves(str) {
    var arr = str.split(' ').map(palabra => palabra.split('').reverse().join(''));
    return arr.join(' ');
  }
  return palabrasAlReves(str);
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  function esCapicua(numero) {
    if (numero.toString() === numero.toString().split('').reverse().join('')) {
      return 'Es capicua';
    }
    return 'No es capicua';
  }
  return esCapicua(numero);
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  function eliminaLetras(cadena) {

    var filtro1ro = cadena.split('a').join('');
    var filtro2do = filtro1ro.split('b').join('');
    var filtro3ro = filtro2do.split('c').join('');
   
    return filtro3ro;
  }
  return eliminaLetras(cadena);
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  function ordenaMenorAmayor(arr) {
    arr.sort(function (a, b) {
      return a.length - b.length;
    });
    return arr;
  }
  return ordenaMenorAmayor(arr);
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
    
  function enComun(arreglo1, arreglo2) {
    var resultado = [];
  
    for (var i = 0 ; i < arreglo1.length ; i++) {
      for (var j = 0 ; j < arreglo2.length ; j++) {
        if (arreglo1[i] === arreglo2[j]) {
          resultado.push(arreglo2[j]);
        }
      }
    }
    return resultado;
  }
  return enComun(arreglo1, arreglo2);  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

