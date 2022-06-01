// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo [7, 9, 3]
  if(array.length === 0) {
    return true
  } else return array.shift() * producto(array)
// return producto
};

// Recursividad en javascript con objetos
// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
//    prop2:{value:5}
//     school: {
//         hogwarts: {
//             headmaster:{
//               name: {
//                 first: "Albus",
//                 last: "Dumbledore"
//               }
//             }
//         }
//     }
// }
let obj = {
  school: {
    hogwarts: {
      headmaster: {
        name: {
          first: "Albus",
          last: "Dumbledore",
        },
      },
    },
  },
  prop1: 5,
  prop2: 6,
};
const isThere = function (obj, value) {
  // tu código aca
  let result = false;
  for (let key in obj) {
    if (obj[key] === value) {
      result = true;
    } else if (typeof obj[key] === "object") {
      result = isThere(obj[key], value);
    }
  }
  return result;
};
console.log(isThere(obj, 6));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EXTRAS ---------------------------------------------------------------------------------------------------------------------
// En los ejercicios extras no contamos con los tests, por lo que no podemos comprobar que funcione correctamente
// a no ser que lo hagamos manualmente con el correcto uso de la consola.
//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Ejercicio 1
// Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

//Ejemplo
// parImpar(20)
// "Par"

let parImpar = (num) => {
  
};
console.log(parImpar(7));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 2
// Objetivo: Realizar un contador decreciente hasta llegar a 1, que arranque del numero que se le pasa por parametro
// Desafio: Devolver los numeros en un array

// Ejemplo
// restar(8)
// (8)  [8, 7, 6, 5, 4, 3, 2, 1]

let nuevoArray = [];

function restar(n) { //n --> 
  if( n > 1) {
    restar(n-1)
    nuevoArray.unshift(n)
    return nuevoArray
  }
}
console.log(restar(8))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejercicio 3

//Objetivo: Realizar una funcion que invierta el orden del string recibido
// Ejemplo: reverse("hola susuna")
// --> 'anusus aloh'

function reverse(str) {
  
}

// "hola"
//  0123
//   1----
//   "ola" + "h"------->
/*                   "ola"
                      012
                       "la"  + "o"  ----------->
                                                "la"
                                                  "a" + "l"
                                                  --------"a"
                                                  "a+ l + o + h"*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ultimo ejercicio

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)

var countArray = function (array) {
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){
      suma = suma + countArray(array[i])
    } else {
      suma = suma + array[i]
    }  
  }
  return suma
};

module.exports = { producto, isThere };
