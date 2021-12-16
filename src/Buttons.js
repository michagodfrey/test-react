import React, { useState } from 'react';;

function Buttons() {
  const [number, setNumber] = useState(1);


  return (
    <div>
      <h2>Click a button to change this number: {number}</h2>
      <button type="button" onClick={() => setNumber(2)}>Click me</button>
      <button type="button" onClick={() => setNumber(3)}>Click me too</button>
    </div>
  )
}

export default Buttons;
