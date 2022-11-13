import { React, useEffect, useState } from 'react';
import LogIn from './components/LogIn';
import SignUp from "./components/Register";
import About from "./components/About";
import Rosters from './components/Rosters';
import EditRoster from './components/EditRoster';
import DeleteRoster from './components/DeleteRoster';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PayCalc from './components/PayCalc';
import Contact from './components/Contact';


function LoadingPage() {
  return(<h1>Loading EasyPortal...</h1>);
}

function MainPage() {
  return (
      <div className="App">
        <header className="App-header">
          <p>
            <Header />
            <About />
            <LogIn />
            <SignUp />
            <Rosters />
            <EditRoster />
            <DeleteRoster />
            <PayCalc />
            <Contact />
            <Footer title={"Check weekly for roster updates!"}/>
          </p>
        </header>
      </div>
    );
}

function App() {
  // useState to create isLoading state
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook so that when page is updated we can load for specified time
  useEffect(() => {
    if(isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1500);
    }
  });

  // Use ternery to operate loading page and main page
  return (
    isLoading ? <LoadingPage /> : <MainPage /> 
  )
}

export default App;