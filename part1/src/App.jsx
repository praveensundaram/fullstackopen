import { useState } from "react";

const Person = ({ person }) => (
  <div>{person.name} {person.number}</div>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");


  const nameOnChange = (event) => {
    setNewName(event.target.value);
  };

  const numberOnChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filterOnChange = (event) => {
    setNewFilter(event.target.value);
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

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <div>filter shown with<input value={newFilter} onChange={filterOnChange}  /></div>

      <form onSubmit={newNameOnSubmit}>
        <h1>add a new:</h1>
        <div>name:<input value={newName} onChange={nameOnChange} /> </div>
        <div>number: <input value={newNumber} onChange={numberOnChange}/></div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
