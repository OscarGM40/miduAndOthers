/* SPREAD OPERATOR VIDEO 02  */
console.clear();
/* el operador spread esparce o expande los elementos de un array u objeto en las partes del código donde se admita esa operación */
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
/* sus usos pueden ser */

// 1 copiar un array
const lista1Copia = [...lista1];
// 2 concatenar varios arrays o unirles más elementos en duro
const lista3 = [...lista1, ...lista2, 7, 8, 9];
// 3 esparcir los elementos en,por ejemplo, una función
function suma(...args: number[]) {
  const resultado = args.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  console.log(resultado);
}
suma(...lista1);

/* el operador rest es justo lo contrario, recibe un conjunto de elementos y los auna o agrupa en un array u objecto */
// function suma(...numeros) <- esto es un rest operator,ojo,ya que auno los parametros en un argumento llamado numeros

const personaje = {
  nombre: "Luis",
  apellido: "Lopez",
  alergias: {
    trigo: true,
    lactosa: false,
  },
};

const direccion = {
  calle: "callese uste,123",
  localidad: "Paris",
  pais: "Francia",
};
/* con los objetos funcionan igual,puedo esparcir los dos obj anteriores  */
const persona = {
  ...personaje,
  ...direccion,
  edad: 45,
};
/* y de nuevo puedo meter propiedades en duro. NOTA: copiar con estos operadores es denominado realizar una copia debil(sólo el primer nivel pasa a ser por valor)Esto es muy importante,ya que un cambio en personaje.alergias afectará a persona.alergias.OJO!! Cualquier objeto de más de un nivel debe utilizar copias profundas o deepCopies  */
console.log(persona);
personaje.nombre = "Jose";
personaje.alergias.trigo = false;
console.log(persona);
