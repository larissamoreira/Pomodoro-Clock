import React from "react";

export const Length = props => (
  <div className="length">
    <h3 id={props.label}>{props.title}</h3>
    <div className="flexrow">
      <button id={props.decrementId} onClick={props.decrement}>
        -
      </button>
      <h4 id={props.lengthId}>{props.length}</h4>
      <button id={props.incrementId} onClick={props.increment}>
        +
      </button>
    </div>
  </div>
);
