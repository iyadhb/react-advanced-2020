import React, { useState } from 'react';


const UseStateObject = () => {
const [person, setPerson] = useState({name: 'Peter' , age:51, message: 'Hey Man'});

const [name, setName] = useState('Iyad');
const [age, setAge] = useState(51);
const [message, setMessage] = useState('React Superstar');

const changeMessage = () => {
  // setPerson({...person, message:'Success'})
  setMessage('Soon will be')

}


  return (
    <>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{message}</h1>
    <button className='btn' onClick={changeMessage }>change message</button>
    </>
  )
};

export default UseStateObject;
