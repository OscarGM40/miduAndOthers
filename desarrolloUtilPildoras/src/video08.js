/* Javascript tiene una serie de reglas para la ASI(Automatic Semicolon Insertion).Esta serie de reglas determina cuando JAvascript pondrá un punto y coma al interpretar nuestro código(tiempo de ejecución).Veamos las tres reglas donde las pone */

/* Regla Uno: JS inserta un punto y coma cuando se acaba el archivo o la siguiente linea empieza por } <- llave de cierre Ejemplo: */

console.log("it works"); // si fuera final de archivo se pondrá un punto y coma

/* NOTA, si hubiera varias lineas vacias da igual,las quitará,el final de archivo será la última sentencia que escriba */

function logFunciona() {
  console.log("también se pondrá un punto y coma"); // <- aqui se inferirá otro punto y coma ya que viene llave de cierre al comenzar la siguiente linea
}

logFunciona();

/* Regla dos: cuando Javascript detecta las palabras reservadas return,continue,throw o break inserta automáticamente un punto y coma al final de estas sentencias */

function noFunciona() {
  return; // fijate que como Javascript detecta return sabe que inferirá un punto y coma y no saltará al console.log,por eso sabe que es código inalcanzable
  console.log("no se ejecutará");
}
const nombres = ["Mariano", "Maria", "Kylian"];
for (const nombre of nombres) {
  if (nombre === "Maria") break; // de nuevo insertará un punto y coma,separando las lineas
  console.log(nombre);
}
for (const nombre of nombres) {
  if (nombre === "MariaIsabel") throw new Error("Maria no esta invitada"); // y lo mismo con continue o con throw,claro que con throw espera a la sentencia
  console.log(nombre);
}

/* Regla tres: si la siguiente línea rompe o no es compatible con la actual inserta un punto y coma.Romper significa que JS intentará concatenar las lineas,y si ve un error inserta un punto y coma.Hay ciertas excepciones */

console.clear(); // aqui si pondrá un punto y coma ya que console.clear()const numeroA en la misma linea no tiene sentido.Asi que primero las junta,ve que no tiene sentido y separa el console.clear de la constante
const numeroA = 5; // y de nuevo Javascript no puede juntar las lineas,asi que también meterá un punto y coma entre las declaraciones
const numeroB = 7;

/*Casos problématicos de la regla tres  */

/* Siempre que haya un paréntesis de inicio hay que prestar atención a la línea anterior */
const numeroC = 5(numeroA + numeroC).toString();
// esto dará un error de inicialización de numeroC,porque ha juntado las lineas: const numeroC = 5(numeroA + numeroC) <- no puede saber que vale numeroC

/* Segundo caso problématico: mismo problema pero con los corchetes.Hay que mirar si tiene sentido la linea anterior */
const vacio = (5)[numeroA + vacio]; // mismo error,va a juntar las lineas 44 y 45.

/* En resumen,cuando se acaba el archivo o la siguiente linea empieza por llave de cierre pone un punto y coma.También con las palabras reservadas return,continue,break y throw.Y si la siguiente linea no es compatible con la actual,salvo cuando haya un parentesis o corchete como inicio de linea que no lo entiende pero no lo pone,lo tengo que poner yo la semi-colon,pues juntará las lineas y dara errores */
