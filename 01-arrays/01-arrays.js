function invertirOrden(array) {
  // [1,2,"x"]
  // ["x",2,1]
  // Invertir el orden de los elementos del array que recibe por parametro
  // Que los ultimos elementos, pasen a ser los primeros
  // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO
  // debera ser devuelto
  // No vale usar el metodo "reverse"
  // [1, 4, 24, 10, 8, 6]~
  //pop -->quita el ultimo elemento del array
  //push --> agrega un elemento al final de array
  //shift -->quita el primer elemento del array
  //unshift --> agrega un elemento al inicio del array
  //[2 4 8  4 54 12]  ---> [ 12 54 4 8 4 2]

  let newArray = [];

  array.forEach((e) => {
    if (String(e).length === 1 && e > -1) {
      newArray.unshift(e);
    }
  });
  return newArray;
  // var invertida = [];
  // for (let i = 0; i < array.length; i++) {
  //     if(array[i] > 0 && array[i] < 10 && typeof array[i] === "number"){
  //         invertida.unshift(array[i])
  //     }
  // }
  // return invertida;
}

function numeroEnComun(array1, array2) {
  // Entre los dos array's que recibe la funcion por parametro
  // Buscar y retornar el valor en comun entre ellos
  let newValue;
    // debugger
    array1.forEach((elemento1) => {
        // debugger
        array2.forEach((elemento2) => {
            // debugger
            if (elemento1 === elemento2) {
                newValue = elemento2;
                // debugger
            } {
                let array3 = array1.concat(array2)
                array3.sort((a,b) => {return a - b })
                newValue = array3.shift()
            }
          });
        });
  return newValue;
}

function sumaDeArrays(array) {
  // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
  // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
  // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  // Ejemplo: [[1, 3], [10, 20], [4, 5], 2]

  let newArray = []
  array.forEach(element => {
      if(element.length > 1) {
          let suma = 0
          element.forEach(element2 => {
              suma += element2
              // debugger
          })
          newArray.push(suma)
      } else newArray.push(element)        
  })
  return newArray;
}

function mismoValorMismosElementos(numero, divisor) {
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Ejemplo divisor = 3 => [x,x,x] y si es divisor = 4 => [x,x,x,x]
  // vemos que todos los elementos deben tener el mismo valor
  // Siendo el número divisible entre el divisor, de no ser así, debe devolver false
  // es decir Si el resultado de la division no es un entero, deben devolver false

  //
  
  let array = [];
  if(numero % divisor === 0) {
    let div = numero / divisor;
    for (let i = 0; i < divisor; i++) {
      const element = div;
      array.push(element)
    }
  } else return false
return array
}

function elementoMenorYMayor(array) {
  // El Array recibido por props es un array que contienen numeros
  // Tenes que retornar un array
  // Solamente con el elemento menor y mayor del array recibido
  let newArray = [];
  let arrayOrdenado = array.sort((a, b) => {
    return a - b
  })
  newArray.push(arrayOrdenado.shift())
  newArray.push(arrayOrdenado.pop())
  return newArray
}

/* ******************************************************

Que pasaria si los array recibidos fuesen multidimensionales?

****************************************************** */

module.exports = {
  numeroEnComun,
  invertirOrden,
  elementoMenorYMayor,
  sumaDeArrays,
  mismoValorMismosElementos,
};
