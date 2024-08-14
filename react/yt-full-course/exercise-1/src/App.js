import './App.css';
import Main from './Components/Main';

const myData = [
  {
    name: 'Tharindu',
    city: 'Galle',
    position: 'Student'
  },

  {
    name: 'Madushnak',
    city: 'Matara',
    position: 'Web Developer'
  },

  {
    name: 'Dilshan',
    city: 'Colombo',
    position: 'Full stack Developer'
  },

  {
    name: 'Shankar',
    city: 'Jafna',
    position: 'Mobile app Developer'
  }

];

function App() {

  return(
  
    <>

      {/* <div> 
        TDM Madushanka
        <h1>Tharindu</h1>
      </div>

      <p>Hello</p> */}

        {/* looping array by using map */}

        {/* send dynimacaly array data to Main component */}

      {/* {
        myData.map(element => {
          // return <p>{element.name}</p>
          return <Main name={element.name} city={element.city}
          position={element.position}/>;
        })
      } */}


{/* By using Object distructuring */}
      {
        myData.map(({name, city,position}) => {
          // return <p>{element.name}</p>
          return <Main name={name} city={city}
          position={position}/>;
        })
      }

    </>

  ); 
}

export default App;
