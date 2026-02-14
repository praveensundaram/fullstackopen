import { useState } from "react";

const StatisticLine = ({ label, value, suffix = "" }) => (
  <tr>
    <td>{label}</td>
    <td>
      {value}
      {suffix}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) return <div>No feedback provided</div>;

  const average = (good - bad) / total;
  const positive = (good * 100) / total;

  return (
    <table>
      <tbody>
        <StatisticLine label="good" value={good} />
        <StatisticLine label="neutral" value={neutral} />
        <StatisticLine label="bad" value={bad} />
        <StatisticLine label="all" value={total} />
        <StatisticLine label="average" value={average.toFixed(2)} />
        <StatisticLine label="positive" value={positive.toFixed(1)} suffix=" %" />
      </tbody>
    </table>
  );
};

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" onClick={() => setGood(good + 1)} />
      <Button name="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" onClick={() => setBad(bad + 1)} />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}


export default App