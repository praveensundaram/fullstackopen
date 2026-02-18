import { useState } from "react";

const Person = ({ person }) => (
  <div>{person.name}</div>
);

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas" }
  ]);

  const [newName, setNewName] = useState("");

  const nameOnChange = (event) => {
    setNewName(event.target.value);
  };

  const newNameOnSubmit = (event) => {
    event.preventDefault();

    const person = {
      id: persons.length + 1,
      name: newName
    };

    setPersons(persons.concat(person));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={newNameOnSubmit}>
        <input value={newName} onChange={nameOnChange} />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
