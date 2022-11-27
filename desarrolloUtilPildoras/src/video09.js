/* El objeto Promise tiene varios métodos que permiten el manejo de la gestión de multiples promesas(si es exitosa una,todas,...) */

const promise1 = fetch("https://rickandmortyapi.com/api/character/?name=cowboy%20rick")
  .then((response) => response.json())
  .then((data) => data.results[0].name);

const promise2 = fetch("https://rickandmortyapi.com/api/character/?name=cult%20leader%20morty")
  .then((response) => response.json())
  // .then((data) => data.results[0].name);
  .then((data) => {
    throw new Error("Error en la promesa 2");
  });

const promise3 = fetch("https://rickandmortyapi.com/api/character/?name=daron%20jefferson")
  .then((response) => response.json())
  .then((data) => data.results[0].name);

/* UNO: Promise.All() <- NOTA: todos estos metodos son promesas(con grupos de promesas en su interior).Bien,tal como su nombre indica, Promise.All es una promesa que sólo se resolverá exitosamente si TODAS sus promesas internas se resuelven exitosamente.En cuanto haya una que no se resuelve Promise.All se resolverá por el error.Lanza todas en paralelo.  */

/* Promise.all([promise1, promise2, promise3])
  .then(allData => allData.forEach(console.log)) */

// Obviamente Promise.All se usa cuando me interesa que se resuelvan todas,cuando quiero que todo el grupo se resuelva(promesas dependientes)

/* DOS: Promise.allSettled: en este caso retorna el resultado de la resolución de las promesas,pero el resultado viene en un objeto con un formato específico {status:fullfilled,value:data | status: fullfilled ,reason:msg}.Si resuelve bien será status + value, sino status+reason */

/* Promise.allSettled([promise1, promise2, promise3])
  .then(allData => allData.forEach(console.log))  */

/* TRES: Promise.race(): race va a devolver el resultado de la promesa que se resuelva más rápido(ignorando las demás) */

/* Promise.race([promise1, promise2, promise3])
 .then(firstToResolve => console.log(firstToResolve)) */
//  Este método es muy útil cuando tengo múltiples APIs que me dan información similar

/* CUATRO: Promise.any() funciona de manera similar a race,pero si la primera que se resuelve da error espera a que se resuelva la siguiente.Es decir que espera por la primera promesa exitosa de un grupo,a diferencia de race que simplemente espera por la primera */

Promise.any([promise1, promise2, promise3]).then((firstSucessPromiseResolved) =>
  console.log(firstSucessPromiseResolved),
);
// De nuevo este método es muy útil cuando tenga varias APIs con la misma info,y además quiera gestionar los errores,normalmente usaré any en vez de race
