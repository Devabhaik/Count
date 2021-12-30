import React, { setState, useState } from 'react';
import './Count.css';

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="count">
        <h1>{count}</h1>
        <div>
          <button>Decreament</button>
          <button>Reset</button>
          <button>Increament</button>
        </div>
      </div>
    </>
  );
};

export default Count;
