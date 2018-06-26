import React from "react";

export const Break = props => (
  <div>
    <h3 id="break-label">Break Length</h3>
    <div className="panel">
      <button id="break-decrement" onClick={props.decrement}>
        -
      </button>
      <h4 id="break-length">{props.break}</h4>
      <button id="break-increment" onClick={props.increment}>
        +
      </button>
    </div>
  </div>
);
