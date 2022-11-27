/*
👉 : moves the memory pointer to the next cell

👈 : moves the memory pointer to the previous cell

👆 : increment the memory cell at the current position

👇 : decreases the memory cell at the current position

🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛

🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜

👊 : Display the current character represented by the ASCII code defined by the current position.
*/

/* constantes */
const MIN_CELL = 0
const MAX_CELL = 255

const clamp = (value) => {
  if (value > MAX_CELL) return MIN_CELL
  if (value < MIN_CELL) return MAX_CELL
  return value // si no entra a los ifs simplemente devuelvo el value
}

const getNextFistIndex = (index, instructions) => {
  /* minimo habré encontrado uno */
  let fists = 1
  for(let i = index + 1;i < instructions.length;i++) {
    if (instructions[i] === '🤜') fists++
    if (instructions[i] === '🤛') fists--
    if (fists === 0) return i
  }
}
const getPrevFistIndex = (index, instructions) => {
  /* minimo habré encontrado uno */
  let fists = 1
  for(let i = index - 1;i >= 0;i--) {
    if (instructions[i] === '🤛') fists++
    if (instructions[i] === '🤜') fists--
    if (fists === 0) return i
  }
}


function translate(string) {
  const memory = [0] // array que nos servirá de memoria

  let pointer = 0 // puntero de la memoria o puntero del array
  let index = 0
  let output = ''

  const arrayOfInstructions = Array.from(string.split(' ').join(''))

  const actions = {
    '👉': () => {
      pointer++
      memory[pointer] ??= 0 // si no existiera esa posicion en el arreglo la inicializo a 0,
    },
    '👈': () => {
      pointer--
      memory[pointer] ??= 0 // este ??= 0 en teoria pudiera sobrar ya que el puntero va hacia adelante y la habrá creado al retroceder siempre iré a una pos con un valor
    },
    '👆': () => {
      memory[pointer] = clamp(memory[pointer] + 1)
    },
    '👇': () => {
      memory[pointer] = clamp(memory[pointer] - 1)
    },
    '🤜': () => {
      if (memory[pointer] === 0) {
        // index = arrayOfInstructions.indexOf('🤛', index)
        index = getNextFistIndex(index, arrayOfInstructions)
      }
    },
    '🤛': () => {
      if (memory[pointer] !== 0) {
        // index = arrayOfInstructions.lastIndexOf('🤜', index)
        index = getPrevFistIndex(index, arrayOfInstructions)
      }
    },
    '👊': () => {
      output += String.fromCharCode(memory[pointer])
    }
  }

  while (index < arrayOfInstructions.length) {
    /* itero por cada action del arreglo de instrucciones  */
    const action = arrayOfInstructions[index]
    /* ejecuto el método en esa posición */
    actions[action]()

    console.log({ action, index, pointer, output })
    /* recuerda incrementar */
    index++
  }

  return output
}

 console.log(translate(
  '👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊'
)) 
console.log(
  translate(
    '👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊'
  )
)
module.exports = translate
