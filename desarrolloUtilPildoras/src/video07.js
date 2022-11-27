/* dar alias a un bucle(labeling a loop) me permite llamarlo en otros,como por ejemplo en uno anidado.Esto puede ser importante,aunque lo que si que es muy visible es que mejora mucho la legibilidad del código.Parece su mayor virtud */
// Fijate que también pasa el control a los bucles anidados,ya que ellos pueden llamar a los externos,lo cual normalmentes es lo que buscaré en bucles anidados.No tiene sentido llamar en un bucle externo a uno interno,pero tiene todo el sentido del mundo llamar desde el interno a variables del externo o al propio bucle poniendole una label.
console.clear();
let unidades = 0;
let decenas = 0;

incrementadecenas: while (true) {
  console.log(`Bucle decenas: ${decenas} ${unidades}`);

  while (true) {
    unidades++;
    if (decenas === 2) break incrementadecenas;
    if (unidades === 10) {
      unidades = 0;
      break;
    }
    console.log(`Bucle decenas: ${decenas} ${unidades}`);
  }

  decenas++;
}
