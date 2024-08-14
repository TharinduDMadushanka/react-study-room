import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';

// import a file with another way
// import {myData} from './Data/myData'; 


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

  {/*
      {
        myData.map(({name, city,position}) => {
          return <Main name={name} city={city}
          position={position}/>;
        })
      }
  */}

  {/* to error remove in dev tools give unique key */}

{
    myData.map(({name, city,position},index) => {
      return <Main key={index} name={name} city={city}
      position={position}/>;
    })
}

    </>

  ); 
}

export default App;
