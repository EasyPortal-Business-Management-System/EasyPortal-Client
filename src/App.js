import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRoster from "./components/AddRoster";

function App() {

  return (
    <main className="App">
      <Login />
      <Route exact path="/addroster" element={AddRoster}/>
    </main>
  );
}

export default App;