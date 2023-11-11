import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  let resultsData = calculateInvestmentResults(userInput);
  let totalInvestment = userInput.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Investment</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          totalInvestment = totalInvestment + userInput.annualInvestment;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>
                {formatter.format(
                  yearData.valueEndOfYear -
                    userInput.initialInvestment -
                    yearData.year * yearData.interest,
                )}
              </td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
