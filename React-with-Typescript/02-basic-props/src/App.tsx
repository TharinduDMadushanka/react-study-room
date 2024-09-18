
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonLis } from './components/PersonList'

function App() {
  // object props

  const personName ={
      first: 'Bruce',
      last: 'Wayn',
  }

  // array props

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayn',
    },
    {
      first: 'Bruce',
      last: 'Kent',
    },
    {
      first: 'Tdm',
      last: 'Wayn',
    }
  ]



  return (
    <div className='App'>
      <Greet name= 'TDM' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonLis names= {nameList}/>
    </div>
  )
}

export default App
