import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';

// import a file with another way
// import {myData} from './Data/myData'; 

const mainBlock = myData.map((({name, city,position},index) => {
  return <Main key={index} name={name} city={city}
  position={position}/>;
}));

// functional component

const NewBlock = () =>{
  return(<>
    {
      myData.map((({name, city,position},index) => {
        return <Main key={index} name={name} city={city}
        position={position}/>;
      }))
    }
  </>)
}

function App() {
  return(  
    <>

  {/* to error remove in dev tools give unique key 

    {
        myData.map(({name, city,position},index) => {
          return <Main key={index} name={name} city={city}
          position={position}/>;
        })
    }

*/}

    {/* {mainBlock}      */}

    <NewBlock/>

    </>

  ); 
}

export default App;
