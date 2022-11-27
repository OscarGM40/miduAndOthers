/* todos conocemos el literal object de Javascript y su potencia.Bien,este tipo viene asociado a la clase Object realmente,la cual tiene muchos métodos estáticos que me van a permitir interactuar con mis literal objects */

console.clear();
// 1- Object.keys() <- devuelve un array de strings con las propiedades de un objeto.Ojo,las devuelve como strings y es un array aunque sea una:
const persona1 = {
  nombre: "Juan",
  edad: 30,
  apellido: "Perez",
};
console.log(Object.keys(persona1)); // ["nombre", "edad", "apellido"]
// TIP: Object.keys().length es muy útil para sacar la longitud de un objeto.
console.log(Object.keys(persona1).length); // 3 su mejor utilidad
// ten cuidado que las ordena si son numbers las propiedades

// 2- Object.values() <- lo mismo pero para los valores.Devolverá un arreglo,pero esta vez no pasa todo a strings,devuelve los valores con su tipo
console.log(Object.values(persona1)); // [ 'Juan', 30, 'Perez' ]

// aqui empieza a ser útil esto para por ejemplo reducir todos los valores de por ejemplo un literal de salarios:
const salarios = {
  juan: 100,
  ana: 150,
  marta: 250,
};
console.log(Object.values(salarios).reduce((acc, val) => (acc += val))); //500

// 3- Object.entries() <- devuelve un array de arrays,es como la combinación de los dos anteriores.En [0][0] tendre las keys en [0][1] los values del primer elemento,etc
console.log(Object.entries(persona1), "ronda 0");
// Object.entries es muy usado para transformar
Object.entries(persona1).map(([k, v]) => {
  if (typeof v === "string") persona1[k] = v.toLocaleUpperCase();
});
console.log(Object.entries(persona1), "ronda 1");

// 4- Object.fromEntries() <- este método es exactamente lo contrario, recibe un array de arrays(o un Map, HashMap,etc cualquier array2d) y devuelve un objeto.
const fromEntries = [
  ["nombre", "Juan"],
  ["edad", 30],
  ["apellido", "Perez"],
]; // <- fijate que debo seguir la convención de todas las keys son strings y los values mantienen su tipo.Puede ser muy interesante
console.log(Object.fromEntries(fromEntries)); // { nombre: 'Juan', edad: 30, apellido: 'Perez' } <- interesante cual asinto

// 5- Object.assign(fuente,destino) <- este método sirve para copiar objetos,recibe dos args, el object fuente y el object destino
const personaje = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  altura: 1.8,
  peso: 75,
  direccion: {
    calle: "Calle falsa 123",
    ciudad: "Ciudad falsa",
    pais: "Pais falso",
    facturacion: {
      iban: "ES123456789",
    },
  },
};

const personaClonada = {};
Object.assign(personaje, personaClonada);
console.log(personaClonada);
console.log(personaje);
console.log(personaje === personaClonada, "comparacion estricta"); // da false, pero solo hace una copia de Lv1,no hace una copia profunda,asi que si cambio un object embebido lo cambio en los dos(no rompe referencia a todos los niveles,igual que el operador ...)Necesitaré lodash y deepCopy,etc.
// En resumen, Object.assign(fuente,destino) solo sirve para copiar objetos sencillos que no tengan subniveles,y ya lo puedo hacer con ... más rápido

// IMPORTANTE!!!: para hacer copias profundas lo mejor es usar JSON.parse(JSON.stringify(objeto))<- investigar más
