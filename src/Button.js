import React from "react";

const Button = (props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
