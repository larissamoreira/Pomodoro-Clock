import React from "react";

export const Session = props => (
  <div>
    {props.session < 10 ? "0"+props.session : props.session}:{props.seconds < 10 ? "0"+props.seconds: props.seconds}
  </div>
);
