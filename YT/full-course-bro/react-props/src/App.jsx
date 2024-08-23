import Student from "./Student"

function App() {

  return (
    <>
      <Student name="TDM" age={20} isStudent={true}/>
      <Student name="Shankar" age={42} isStudent={false}/>
      <Student name="Perera" age={50} isStudent={false}/>
      <Student name="Madushanka" age={18} isStudent={true}/>
      <Student name="PropTypes" age="12" isStudent={true}/>
    </>
  )
}

export default App

/**
 * Props
  * read-only properties that are sgared between cmponents
  * A parent component can send data to a chld component
  * <Component key=value />
 */

/**
 * Prop Types
 * a machanism that ensure that the passed value is of the correct data type
 * age : PropsType.number
 */
