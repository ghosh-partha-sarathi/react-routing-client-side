import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <br />
      <h4>Here is a button that tracks how many times it is clicked:</h4>
      <br />

      <button
        className="btn btn-primary btn-lg"
        onClick={() => setCount(count + 1)}
      >
        Click Me!!!
      </button>
      <br />
      <br />
      <h5>Button is clicked: {count} times</h5>
      <br />
    </div>
  );
}

export default ClickCounter;
