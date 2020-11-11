import React, { useState } from 'react';


const UseStateObject = () => {
const [person, setPerson] = useState({name: 'Peter' , age:51, message: 'Hey Man'});
// (test)

const changeMessage = () => {
  setPerson({...person, message:'Success'})
}


  return (
    <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.message}</h1>
    <button className='btn' onClick={changeMessage }>change message</button>
    </>
  )
};

export default UseStateObject;
