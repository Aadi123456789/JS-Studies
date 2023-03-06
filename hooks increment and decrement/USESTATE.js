import React, { useState } from 'react';

function MyComponent() {
  const [add, total] = useState(0);

  const incrementCount = () => {
    total(add + 1);
  };

  const decrementCount = () => {
    total(add - 1);
  };

  return (
    <div>
      <p>Count: {add}</p>
      <button onClick={incrementCount}>
        Increment 
      </button><br></br>
      <button onClick={decrementCount}><br></br>
        Decrement
      </button>
    </div>
  );
}

export default MyComponent;