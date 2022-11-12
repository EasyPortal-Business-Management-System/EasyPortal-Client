import Register from "./components/Register";
import LogIn from "./components/LogIn";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import AddRoster from "./components/AddRoster";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/login" element={<LogIn />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/addroster" element={<AddRoster />}/>
      </Routes>
    </main>
  );
}

export default App;