import React, { useState } from "react";

const Answers = () => {
  const [type, setType] = useState();
  const [score, setScore] = useState();
  return (
    <div>
      <h4>Answers:</h4>
      <ul className="list-group">
        <li className="list-group-item">Type: {type}</li>
        <li className="list-group-item">Score:{score}</li>
      </ul>
    </div>
  );
};

export default Answers;
