import MyComponent from "./MyComponent"

function App() {


  return (
   
    <MyComponent/>
  )
}

export default App

/**
 * useEffect() 
 * react hook that tells react do some code when(do below one)
      * this component re-renders
      * this component mounts
      * the state of a value
 * Its like a side code 
 */

// useEffect(function, [deoendencies])

/**
 * 1. useEffect(() => {}) runs after every re-render
 * 2. useEffect(() => {}, []) runs only on mount
 * 3. useEffect(() => {}, [value]) runs on mount + when value changes
 */

/**
 * USES
 * 1. event listers
 * 2. DOM manipulation
 * 3. Subscriptions (real-time updates)
 * 4. Fetching Data from an API
 * 5. Clean up when a component unmounts
 */