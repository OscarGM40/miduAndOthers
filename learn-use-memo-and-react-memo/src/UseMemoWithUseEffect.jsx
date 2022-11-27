import React, { useEffect, useState } from "react";

export const UseMemoWithUseEffect = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  const userType = React.useMemo(
    () => ({
      underAge: age < 18,
      citizen: country === "USA",
    }),
    [age, country],
  );

  const myArray = React.useMemo( () => ["cosa","casa","cusa"],[]);
  
  useEffect(() => {
    console.count("UserType has changed");
  }, [userType]);

  useEffect(() => {
    console.count("Array has changed");
  }, [myArray]);
  
  const miString = "moko"
  
  useEffect(() => {
    console.count("String has changed");
  }, [miString]);

  console.count("Component re-rendered");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="name" />
      <input onChange={(e) => setAge(e.target.value)} placeholder="age" type="number" />

      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="USA">USA</option>
      </select>
    </div>
  );
};
