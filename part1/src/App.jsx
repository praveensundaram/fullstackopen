const Header = (props) => <h1>{props.course}</h1>

const Total = (props) => <p><b>Number of exercises {props.total}</b></p>


const Content = ({ parts }) => {

  return (<div>
    { parts.map( (part) => <Part part={part} /> )}
    <Total total={ parts.reduce ((sum , part) => sum+part.exercises , 0 )} />
    </div>
  )
}

const Part = ({part}) => {
  console.log("part is ", part)
  return (
  <p>
    {part.name} {part.exercises}
  </p>
)
}

const Course = ( {course} ) => {
  console.log("course parts ", JSON.stringify(course.parts));
  return (
    <div>
       <Header course={course.name} />
       <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <>{ courses.map( (course) => <Course course={course} /> )} </>
}

export default App