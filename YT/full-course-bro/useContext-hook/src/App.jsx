import ComponentA from "./ComponentA"

function App() {


  return (

    <ComponentA/>
  )
}

export default App

/**
 * useContext()
 * react hook that allows to shares value
 * between multiple levels of component
 * without passing props through level
 */

/**
 * PROVIDER COMPONENT
 *  1. import {createContext} from 'react';
 *  2. export const MyContext = createContext();
 *  3. <MyContext.provider value={value}>
 *     <child/>
 *     </MyContext.Provider>
 */

/**
 * CONSUMER COMPONENTS
 * 1.import React, {useContext} from 'react';
 *   import {myContext} from './ComponentA';
 * 
 * 2. const value = useContext(MyContext);
 */