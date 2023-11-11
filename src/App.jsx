import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(newVal, id) {
    setUserInput((prev) => {
      return {
        ...prev,
        [id]: newVal,
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
