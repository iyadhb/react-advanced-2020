import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState("Random title");
const handleClick = () => {
  if(text === "Random title") {
    setText('Iyad Barakat')
  } else {
    setText("Random title")
  }
  
}

  return (
    <React.Fragment>
    <h1>{text}</h1>
    <button type="button" className="btn" onClick={handleClick}>Change Text</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
