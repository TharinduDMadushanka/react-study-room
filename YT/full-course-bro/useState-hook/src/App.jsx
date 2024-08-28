import MyComponent from "./MyComponent"
import Counter from "./Counter";

function App() {

  return (
    // <MyComponent/> 
    <Counter/> 
  );
}

export default App

/**
 * React Hook
 * special function that allows component to use React features without 
 * writting class componenet (React v16.8)
 * (useSate, useEffect, UseContext,useReader,useCallback and more..)
 */

/**
 * useState() 
 * a react hook that allows the creaion of a stateful variable and a setter
 * function to update the value in the virtual DOM.
 * [name, setName]
 */