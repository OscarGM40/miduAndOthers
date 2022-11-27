console.clear();

const listaNumeros = [12, 21, 38,45,56,78];
// puedo acceder a los elementos de un array,saltandome posiciones intermedias
// también puedo usar el operador rest para agrupar el resto de elementos
const [,,pos3, ...resto] = listaNumeros

// para objetos es muy parecido,solo que se usan llaves y no son argumentos posicionales,van por el nombre de la propiedad,no por su posición
const persona = {
    nombre: 'Juan',
    edad: 23,
  }
  // puedo renombrar la propiedad desestructurada con 'prop:newName'
const { nombre: name, edad } = persona
// de nuevo ,puedo sacar algunas propiedades y dejar el resto
const { nombre,...restoObj } = persona
// hay trucos útiles para hacer un swap de variables,como meterlas en un array y sacarlas con los nombres cambiados

let num1 = "juan";
let num3 = "perez";

[num3,num1] = [num1,num3];
console.log(num1,num3) // dará 4,2
