import { useState } from 'react'

const StatisticsLine = ({name , count, suffix = ""}) => ( <p>
{name}: {count}
{suffix}
</p>
)
const Statistics = ( {good, neutral, bad} ) => {
  const total =  good + bad + neutral;
  if (total === 0) return <div>No feedback provided</div>
  return(
    <div>
    < StatisticsLine name="good" count={good} />
    < StatisticsLine name="neutral" count={neutral} />
    < StatisticsLine name="bad" count={bad} />
    < StatisticsLine name="all" count={total} />
    < StatisticsLine name="average" count={ (good - bad) / total} />
    < StatisticsLine name="good" count={good * 100 / total} suffix = " %"/>
    </div>
  )
}


const Button = ({name, onClick}) => (
  <button onClick={onClick}>
    {name}
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App