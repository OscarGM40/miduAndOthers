/* comparador abstracto(==) y estricto(===).  */
/* IMPORTANTE: este video sólo es para entender que no debe usarse el comparador doble igual pues hace conversiones super-raras y no vale pa ná */
console.clear();

// null <- null y undefined comparados entre ellos dan true ojo, y comparados con el resto darán false.Regla principal
// undefined
const valorNull = null;
const valorUndefined = undefined;
const valorResto = 0;
console.log(valorUndefined == valorNull); // true
console.log(valorUndefined == valorResto); // false

/* Regla también principal,el comparador abstracto hará una serie de conversiones,dependiendo del tipo del dato.Asi pues comparar "" con 0 seria como si comparara Number(valorString) y valorNumber, lo cual dara true*/
// string
// number
// boolean
const valorString = "";
const valorNumber = 0;
const valorBoolean = false;
console.log(valorString == valorBoolean); // true pues es Number("")
console.log(valorNumber == valorBoolean); // true pues es Number(false)
console.log("" == false); //realmente esto es lo que sucede por detrás

// object <- el comparador abstracto siempre va a hacer una conversión a un primitivo.Da igual que sea un puto objecto,lo va a convertir.Para ello usará el método toPrimitive() que viene ya en el motor de javascript
const valorObject = {
  nombre: "Juan",
};

const valorObject2 = {
  nombre: "Juan",
};

/* este toPrimitive en un obj va a iterar sobre valueOf() y toString() hasta que encuentre un primitivo.Lo encontrará así: */
console.log(valorObject.valueOf().toString()); //esto da [objet Object]
console.log(valorObject.valueOf().toString() == "[object Object]"); //true

/* importante,comparar dos NaN no da true,sino false */
console.log(NaN == NaN); // false

/*  */
console.log(valorObject == valorObject2); // false,pues son diferentes
console.log(
  valorObject.valueOf().toString() == valorObject2.valueOf().toString()
); // true, pues el string es [object Object] para los dos,es el mismo

/*  */
