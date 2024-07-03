import axios from "axios";
import "./App.css";
import Button from "./Button";
import Answers from "./Answers";
import { useState } from "react";

function App() {
  const [sentimentResult, setSentimentResult] = useState(null);
  const [compoundScore, setCompoundScore] = useState(null);
  const [inputText, setInputText] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;

  const analyzeSentiment = async (text) => {
    const options = {
      method: "GET",
      url: "https://sentiment-analyzer3.p.rapidapi.com/Sentiment",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "sentiment-analyzer3.p.rapidapi.com",
      },
      params: {
        text: text,
      },
    };
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("Error response:", error.response); // Log detailed error response
      console.error("Error message:", error.message);
      console.error("Error config:", error.config); // Log request config for debugging
    }
  };
  const handleAnalysis = async () => {
    const sentimentResult = await analyzeSentiment(inputText);
    if (sentimentResult) {
      setCompoundScore(sentimentResult.compound);
      setSentimentResult(sentimentResult.sentiment);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sentiment Analysis API </h1>
      <div className="container d-flex ">
        <div className="row">
          <div className="col-3">
            <input
              className="text-box"
              type="text"
              placeholder="Enter a Sentence:"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className="col-5">
            <Button value="Analyze" onClick={handleAnalysis} />
          </div>

          <Answers type={sentimentResult} score={compoundScore} />
        </div>
      </div>
    </div>
  );
}

export default App;
