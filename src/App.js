import "./index.css";
import { useState } from "react";

const messages = ["Learn react", "Apply for Jobs", "Invest your new income"];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);
  const [previouscount, setPreviousCount] = useState(0);
  const [nextcount, setNextCount] = useState(0);

  const PreviousCounting = () => {
    setPreviousCount((s) => s + 1);
  };

  const NextCounting = () => {
    setNextCount((s) => s + 1);
  };

  const previousStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const nextStep = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsopen((is) => !is)}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step : {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2" }}
              onClick={() => {
                previousStep();
                PreviousCounting();
              }}
            >
              previous {previousStep}
            </button>
            <button
              style={{ backgroundColor: "#7950f2" }}
              onClick={() => {
                nextStep();
                NextCounting();
              }}
            >
              Next
            </button>
          </div>
          <div className="count">
            <p>
              You have Clicked the Previous Button{" "}
              {<span color="#941e57"> {previouscount}</span>} times
            </p>
            <p>
              You have Clicked the Next Button{" "}
              {<span color="#941e57">{nextcount}</span>} times
            </p>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="Patience">
          <p>Sorry Something Went Wrong </p>
        </div>
      )}
    </>
  );
}
