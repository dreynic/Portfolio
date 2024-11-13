import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from "./components/Navbar/Navbar";

function App() {

  return (
    <>
    <Router>
      <Nav />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Router>
    </>
  )
}

export default App
