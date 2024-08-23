import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="TDM" />
      <UserGreeting isLoggedIn={true}  />
      <UserGreeting />
      {/* <UserGreeting isLoggedIn={false} username="TDM" /> */}
    </>
  )
}

export default App

/**
 * Conditional Rendering
 * allows you to control what gets rendered in your application based on certiian condition
 * (show, hide or change components)
 */