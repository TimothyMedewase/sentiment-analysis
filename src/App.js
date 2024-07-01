import "./App.css";
import Button from "./Button";
import Answers from "./Answers";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sentiment Analysis API </h1>
      <div className="container ">
        <div className="row">
          <div className="col-4">
            <input
              className="text-box"
              type="text"
              placeholder="Enter a Sentence:"
            />
          </div>
          <div className="col-2">
            <Button />
          </div>
          <Answers />
        </div>
      </div>
    </div>
  );
}

export default App;
