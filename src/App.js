import React from 'react';
import LogIn from './components/LogIn';
import SignUp from "./components/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          EasyPortal
          <LogIn />
          <SignUp />
        </p>
      </header>
    </div>
  );
}

export default App;