/* Lo importante es entender que el switch no debería escalar,se debe extraer su lógica a un objeto,etc y si escalara que escale ese objeto.Entendido */
const RULES = {
  monday: {
    start: "08:30",
    end: "18:00",
  },
  tuesday: {
    start: "08:30",
    end: "18:00",
  },
  wednesday: {
    start: "08:30",
    end: "18:00",
  },
  thursday: {
    start: "08:30",
    end: "18:00",
  },
  friday: {
    start: "08:00",
    end: "15:00",
  },
  saturday: {
    start: "09:00",
    end: "21:00",
  },
  sunday: {
    start: "09:00",
    end: "21:00",
  },
};

/**
 * Funcion que recibe un dia y un turno y devuelve la hora de comienzo
 * @param {} day
 * @param {} schedule
 */
function maipain(day, schedule) {
  return RULES[day][schedule];
}
console.log(maipain("saturday", "end"));
// realizar algun juego de loterias etc,practicar más como asinto
