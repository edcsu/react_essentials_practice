import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
  });
  
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput(oldUserInput => {
        return {
            ...oldUserInput,
            [inputId]: +newValue
        }
    });
  }
  return (
      <>
        <Header />
        <UserInput onChangeInput={handleChange} userInput={userInput} />
        { inputIsValid ? 
          <Results userInput={userInput} /> : 
          <p className="center"> 
            Please enter a duration greater than or equal to 1
          </p>}
      </>
    )
  }

export default App
