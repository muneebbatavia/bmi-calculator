import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState();

  useEffect(() => {}, [bmi, msg]);

  function calculator() {
    if (height === 0 || weight === 0) {
      alert("Please enter Weight and Height");
    } else {
      var bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));
    }
    console.log(bmi);
    //msg
    
    if (bmi <= 18.5) {
      setMsg("You are Underweight");
    } else if (bmi > 18.5 && bmi <= 24.9) {
      setMsg("Your weight is Normal");
    } else if (bmi > 24.9 && bmi <= 29.9) {
      setMsg("You are Overweight");
    } else if (bmi > 29.9) {
      setMsg("You are very Overweight");
    }
  }

  function resetInput(e) {
    e.preventDefault();
    setBmi("");
    setMsg("");
    setHeight(0);
    setWeight(0);
  }

  function clearInput(e) {
    e.target.value = "";
  }

  return (
    <>
      <div className="all">
        <div>
          <div>
            <label>
              <b>Weight</b> (Kilogram)
            </label>
            <input
              value={weight}
              onFocus={clearInput}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>
              <b>Height</b> (Meter)
            </label>
            <input
              value={height}
              onFocus={clearInput}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="Submit" onClick={calculator}>
              {" "}
              Submit{" "}
            </button>
            <button className="btn btn2" type="Submit" onClick={resetInput}>
              {" "}
              Reset{" "}
            </button>
          </div>

          <div>
            <h2>Your BMI is : {bmi}</h2>
            <p>{msg}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
