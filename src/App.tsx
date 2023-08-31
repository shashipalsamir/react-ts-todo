import AddToDo from "./components/AddToDo"
import NavBar from "./components/NavBar"
import ToDos from "./components/ToDos"

const App = () => {
  return (
    <main className="main-task">
      <h1>Hello, Welcome ReactJS</h1>
      <NavBar />
      <AddToDo />
      <ToDos />      
    </main>
  )
}

export default App
