import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';

function App() {

  return(
    // <>
    //   <div>
    //   <h1>Tharindu</h1>
    //   </div>
    //   <p>Hello</p>
    // </>

    <section>
      <div> 
        TDM Madushanka
      <h1>Tharindu</h1>
      </div>
      <p>Hello</p>

      {/* import the Main function */}
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
      {/* import the Main function */}
      <Main>
        <h5>This is children property inside Main function</h5>
        <p>I am children pargraph</p>
      </Main>

        {/* This is manual parametering */}
        
        <Main name='Shankar' city='Colombo' position='web dev'/>
        <Main name='Madu' city='Matara' position='full stack dev'/>
     

    </section>

  ); 
}

export default App;
