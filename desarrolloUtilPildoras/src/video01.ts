/* ARRAY VS OBJETO - QUE ES UN ITERABLE */
/* https://www.youtube.com/watch?v=qEXfUlercV4&list=PL3aEngjGbYhm0oduvsufVr4E0hAZdFZU9&index=1&ab_channel=Desarrollo%C3%9Atil */

/* tanto los arrays como los objects son iterables porque tienen esa funcionalidad en Symbol.iterator. NOTA: Symbol es un tipo de dato que nos permite crear propiedades únicas e inmutables */

console.clear();

const personaObj: any = {
  name: "Roberto",
  surname: "Lopez",
  age: 45,
  mail: "roberher@tmail.com",
  favoriteColor: "blue",
};

/* para poder definir un iterador a un object tengo que desarrollar una funcion generadora en su propiedad Symbol.iterator,ya que guardará ahi el modo de iterarlo,que será el que yo quiera */
personaObj[Symbol.iterator] = function* () {
  /* el yield es una palabra reservada que nos permite devolver un valor de una funcion generadora.Fijate en el uso de this para referirse al obj */
  for (let i in this) {
    yield this[i];
  }
  /*   yield personaObj.name; <- forma sin this
  yield personaObj.surname;
  yield personaObj.age;
  yield personaObj.mail;
  yield personaObj.favoriteColor; */
};

const personaArr = ["Roberto", "Lopez", 45, "roberher@tmail.com", "blue"];
console.log(personaArr[Symbol.iterator]);
/* si intentara acceder al iterador de un obj tendré un undefined */
// console.log(personaObj[Symbol.iterator]); <- rompe la app

/* NOTA: lo que hace Javascript es ejecutar esta función Symbol.iterator cada vez que llamo a un map, un for of, un filter,un forEach,etc...La función devuelve next() cada iteración */
for (let p of personaObj) {
  console.log(p);
}
