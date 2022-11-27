/* global test, expect */
const translate = require('./index.js')

test('it translates hello accordingly', () => {
  expect(
    translate(
      '👇 🤜 👇 👇 👇 👇 👇 👇 👇 👉 👆 👈 🤛 👉 👇 👊 👇 🤜 👇 👉 👆 👆 👆 👆 👆 👈 🤛 👉 👆 👆 👊 👆 👆 👆 👆 👆 👆 👆 👊 👊 👆 👆 👆 👊 '
    ).toBe('Hello')
  )
})

test.skip('it translates hello world! accordingly', () => {
  expect(
    translate(
      '👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊'
    ).toBe('Hello World!')
  )
})
