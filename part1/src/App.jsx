import { useState } from 'react'

const Statistics = (props) => (
  <p>{props.name} : {props.count}</p>
)
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.name}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name="good" onClick={() => setGood(good + 1)} />
      <Button name="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" onClick={() => setBad(bad + 1)}  />
      <h1>Statistics</h1>
      <Statistics name="good" count={good}/>
      <Statistics name="neutral" count={neutral}/>
      <Statistics name="bad" count={bad}/>
    </div>
  )
}

export default App