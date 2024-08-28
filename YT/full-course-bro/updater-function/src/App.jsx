import MyComponent from "./MyComponent"

function App() {


  return (
  
    <MyComponent/>
  )
}

export default App

/**
 * Updater Function
 * a funcion pass as an argument to setState() usually 
 * ex: setYear(year + 1) -> setYear(arroe function) ==  setYear(y => y + 1)
 * allow for safe updates based on the previous state
 * Used with multiple state updates and asynchronous functions
 * Good practice to use updater function
 */