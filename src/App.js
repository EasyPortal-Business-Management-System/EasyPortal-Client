import React from 'react';
import LogIn from './components/LogIn';
import SignUp from "./components/Register";
// import SimpleHome from './components/SimpleHome';
import About from "./components/About";
import Rosters from './components/Rosters';
import AddRoster from './components/AddRoster';
import EditRoster from './components/EditRoster';
import DeleteRoster from './components/DeleteRoster';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <About />
          <LogIn />
          <SignUp />
          <Rosters />
          <AddRoster />
          <EditRoster />
          <DeleteRoster />
        </p>
      </header>
    </div>
  );
}

export default App;