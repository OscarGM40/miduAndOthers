import React from "react";

const ExpensiveComponent = React.memo(() => {

  console.log("expensive component rendered")

  let total = 0;
  for(let i = 0; i < 100000000; i++) { total += i }

  return ( <div>ExpensiveComponent</div>)
})
export default ExpensiveComponent