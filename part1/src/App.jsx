import { useState } from "react";

const Person = ({ person }) => (
  <div>{person.name} {person.number}</div>
);

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas" , number: "9900264381"}
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");


  const nameOnChange = (event) => {
    setNewName(event.target.value);
  };

  const numberOnChange = (event) => {
    setNewNumber(event.target.value);
  };

  const newNameOnSubmit = (event) => {
    event.preventDefault();

    if (persons.reduce((nameList, person) => nameList.concat(person.name), []).includes(newName)) {
      alert(`${newName} is already added to the phonebook`);
    }
    else {
      const person = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      };

      setPersons(persons.concat(person));
      setNewName("");
      setNewNumber("");
    }

  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={newNameOnSubmit}>
        <div>name:<input value={newName} onChange={nameOnChange} /> </div>
        <div>number: <input value={newNumber} onChange={numberOnChange}/></div>
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
