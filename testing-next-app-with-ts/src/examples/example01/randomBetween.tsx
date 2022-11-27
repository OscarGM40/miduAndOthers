/**
 *
 * @param min minimo del rango
 * @param max maximo del rango
 * @returns un entero entre ese rango
 */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
