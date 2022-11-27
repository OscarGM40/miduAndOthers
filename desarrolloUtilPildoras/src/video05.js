/*  NO UTILICES SWICH - Normalmente,cuando hay muchos if/elseif suele pensarse que cambiarlo por un switch es la solución.Esto no es asi,ya que tampoco escala bien(igual que los if de mal).Es decir que no es la solución.*/
console.clear();
const GAME_OPTIONS = ["PIEDRA", "PAPEL", "TIJERA"];
/* La solución esta basada en el juego de piedra-papel-tijera e implica definir un objeto con las soluciones */
const GAME_RULES = {
  PIEDRA: {
    TIJERA: true,
    PAPEL: false,
  },
  PAPEL: {
    PIEDRA: true,
    TIJERA: false,
  },
  TIJERA: {
    PAPEL: true,
    PIEDRA: false,
  },
};

// TIP: fijate que el objeto tiene la misma estructura que el switch al que sustituye,pero obviamente es mucho menos verboso.La unión de computadas,boleanos y el objeto es la clave para grupos de condicionales
/**
 *
 * Funcion que ejecuta el juego de piedra-papel-tijera
 * @param {} player1  Opción del jugador 1
 * @param {} player2  Opción del jugador 2
 */
function game(player1, player2) {
  if (
    !GAME_OPTIONS.includes(player1.toUpperCase()) ||
    !GAME_OPTIONS.includes(player2.toUpperCase())
  ) {
    return "Seleccione una opción válida como argumento,peazo retarded";
  }

  if (player1.toUpperCase() === player2.toUpperCase()) return "Empate";

  //   si empezará tanto con switchs como con ifs va a salir el switch del averno
  // es solo para peña prehistoric al-andalusa
  /*   switch (player1.toUpperCase()) {
    case "PIEDRA":
      if (player2.toUpperCase() === "PAPEL") return "Player 2 gana";
      else return "Player 1 gana";
  } */

  /* La solucion es esta, definirse el objeto y por computadas ver si es true o false.Muy interesante */
  if (GAME_RULES[player1][player2]) return "Player 1 gana";
  else return "Player 2 gana";
}

console.log(game("PIEDRA", "TIJERA"));
