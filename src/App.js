import React from 'react';
import LogIn from './components/LogIn';
import SignUp from "./components/Register";
// import SimpleHome from './components/SimpleHome';
import About from "./components/About";
import Rosters from './components/Rosters';
import AddRoster from './components/AddRoster';
import EditRoster from './components/EditRoster';
import DeleteRoster from './components/DeleteRoster';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
          <About />
          <LogIn />
          <SignUp />
          <Rosters />
          <AddRoster />
          <EditRoster />
          <DeleteRoster />
          <Footer title={"Check weekly for roster updates!"}/>
        </p>
      </header>
    </div>
  );
}

export default App;