const Header = (props) => <h1>{props.course}</h1>

const Total = (props) => <p><b>Number of exercises {props.total}</b></p>


const Content = ({ parts }) => {

  return (<div>
    { parts.map( (part) => <Part key={part.id} part={part} /> )}
    <Total total={ parts.reduce ((sum , part) => sum+part.exercises , 0 )} />
    </div>
  )
}

const Part = ({part}) => {
  return (
  <p>
    {part.name} {part.exercises}
  </p>
)
}

const Course = ( {course} ) => {
  return (
    <div>
       <Header course={course.name} />
       <Content parts={course.parts} />
    </div>
  )
}

export default Course