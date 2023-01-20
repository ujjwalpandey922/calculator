import { useState } from "react";
import "./App.css";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { FaRegTimesCircle } from "react-icons/fa";
import { FiDivideCircle } from "react-icons/fi";
function App() {
  const [digits, setDigits] = useState({
    digit1: "",
    digit2: "",
  });
  const [res, setRes] = useState("");
  const handleChange = (e) => {
    setDigits((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleOp = (operation) => {
    let a = +digits.digit1;
    let b = +digits.digit2;
    if (operation == "+") {
      setRes(a + b);
    } else if (operation == "-") {
      setRes(a - b);
    } else if (operation == "*") {
      setRes(a * b);
    } else {
      setRes(a / b);
    }
    console.log(res);
  };
  console.log("R", res);
  return (
    <div className="App">
      <div className="appContainerInput">
        <input
          type="text"
          placeholder="Enter 1st Digit"
          name="digit1"
          value={digits.digit1}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Enter 2nd Digit"
          name="digit2"
          value={digits.digit2}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="appContainerSymbols">
        <GrAddCircle onClick={() => handleOp("+")} />
        <GrSubtractCircle onClick={() => handleOp("-")} />
        <FaRegTimesCircle onClick={() => handleOp("*")} />
        <FiDivideCircle onClick={() => handleOp("/")} />
      </div>
      <div className="result">
        Answer : <span>{res !== "" ? res : "Enter 2 Numbers"}</span>
      </div>
    </div>
  );
}

export default App;
