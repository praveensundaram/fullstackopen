import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent...",
    "Any fool can write code that a computer can understand...",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code...",
    "Programming without an extremely heavy use of console.log...",
    "The only way to go fast, is to go well."
  ];

  const generateRandomNumber = (max) =>
    Math.floor(Math.random() * max);

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <p>{anecdotes[selected]}</p>

      <button
        onClick={() =>
          setSelected(generateRandomNumber(anecdotes.length))
        }
      >
        next anecdote
      </button>
    </div>
  );
};

export default App;
