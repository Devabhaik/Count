import React, { setState, useState } from 'react';
import './Count.css';

const Count = () => {
  const [count, setCount] = useState(0);

  const Increament = () => {
    setCount(count + 1);
  };
  const Decreament = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="count">
        <div className="container">
          <p>{count}</p>
          <div className="button">
            <button onClick={Decreament}>Decreament</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Increament}>Increament</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
