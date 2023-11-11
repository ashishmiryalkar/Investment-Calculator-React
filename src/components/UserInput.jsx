import { useState } from "react";

export default function UserInput({ handleChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange(+event.target.value, "initialInvestment")
            }
            value={userInput.initialInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange(+event.target.value, "annualInvestment")
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              handleChange(+event.target.value, "expectedReturn")
            }
            value={userInput.expectedReturn}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) => handleChange(+event.target.value, "duration")}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
