import Axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("");
  const cat = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    cat();
  }, []);

  return (
    <div className="App">
      <button onClick={cat}>Click for Catfact!</button>
      <h1>{catFact}</h1>
    </div>
  );
}

export default App;
