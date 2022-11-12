import React from 'react';
import LogIn from './components/LogIn';
import SignUp from "./components/Register";
import SimpleHome from './components/SimpleHome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <SimpleHome />
          <LogIn />
          <SignUp />
        </p>
      </header>
    </div>
  );
}

export default App;