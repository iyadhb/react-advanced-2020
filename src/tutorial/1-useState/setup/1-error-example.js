import React from 'react';

const ErrorExample = () => {
  let title = 'my Random title'
  const handleClick = () => {
    
  }
  return (
 <React.Fragment>
  <h2>{title}</h2>
  <button type='button' className="btn" onClick={handleClick}>change title</button>
  </React.Fragment>

  )
 
};

export default ErrorExample;
