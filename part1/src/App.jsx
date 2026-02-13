// Header component: displays course name
const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercise}) => <p>{part} {exercise}</p>

// Content component: displays a part and its number of exercises
const Content = ({ part1, exercise1, part2, exercise2, part3, exercise3 }) => (
  <div>
    <Part part={part1} exercise={exercise1} />
    <Part part={part2} exercise={exercise2} />
    <Part part={part3} exercise={exercise3} />
    </div>
);

// Total component: displays the total number of exercises
const Total = ({ exercises1, exercises2, exercises3 }) => (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
);

 const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
     <Header course={course} />
     <Content part1={part1.name} exercise1={part1.exercises} part2={part2.name} exercise2={part2.exercises} part3={part3.name} exercise3={part3.exercises} />
     <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />

    </div>
  )
}
 

export default App;
