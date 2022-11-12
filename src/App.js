import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRoster from "./components/AddRoster";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <main className="App">
      <Login />
      <Route exact path="/dashboard" element={Dashboard}/>
      <Route exact path="/addroster" element={AddRoster}/>
    </main>
  );
}

export default App;