import React from "react";

function Food() {
  const food1 = "Briyani";
  const food2 = "Paneer Butter Masala";

  return (
    <div>
    <h2>Foods</h2>
      <ul>
        <li>{food1.toUpperCase()}</li>
        <li>{food2.toUpperCase()}</li>
      </ul>
      <hr/>
    </div>
  );
}

export default Food;
