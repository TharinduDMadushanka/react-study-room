import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';


const mainBlock = myData.map((({name, city,image,position},index) => {
  return <Main key={index} name={name} city={city}
  position={position} image={image}/>;
}));


function App() {
  return(  
    <div className='main-container'>

    <div className='main-block-container'>
    {mainBlock}
    </div>

    </div>

  ); 
}

export default App;
