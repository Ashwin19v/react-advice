import "./Advice.css";
import { useState } from "react";

export const Advice = () => {
  const [advice, setAdvice] = useState("Please click the button");
  async function advices() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={advices}>Get Advice</button>
    </div>
  );
};
