
import './App.css'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Status } from './components/Status'


function App() {
 
  return (
    <div className='App'>
      <Status status='success'/>

      {/* text Placeholder */}
      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Oscar wins TDM!</Heading>
      </Oscar>

      <Greet name='TDM'  isLoggedIn={true}/>
    </div>
  )
}

export default App
