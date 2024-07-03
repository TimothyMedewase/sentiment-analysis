import React from "react";

const Answers = (props) => {
  return (
    <div className="col-6">
      <h4>Answers:</h4>
      <ul className="list-group">
        <li className="list-group-item">Type: {props.type}</li>
        <li className="list-group-item">Score:{props.score}</li>
      </ul>
    </div>
  );
};

export default Answers;
