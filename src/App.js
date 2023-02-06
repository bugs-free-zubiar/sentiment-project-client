import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  // Keeping Sentiment data inside State
  const [sentiment, setSentiment] = useState(null);


  // Getting Sentiment Data
  useEffect(() => {
    fetch('http://localhost:5000/result')
      .then(res => res.json())
      .then(sentiment => setSentiment(sentiment))
  }, [])


  // stored Value
  useEffect(() => {
    console.log((sentiment?.score))
  }, [sentiment?.score])
  // console.log(sentiment)




  return (
    <div className="App">
      <h1>Calculation</h1>
      {/* {console.log(Object.keys(sentiment?.calculation[0]))} */}
      <h1>Negative</h1>
      <h1>Positive</h1>
      <h1>Score</h1>
      <h1>Comparative</h1>
      <h1>Tokens</h1>
      <h1>Words</h1>

    </div>
  );
}

export default App;
