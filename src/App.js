import { React, useEffect, useState } from 'react';
import LogIn from './components/LogIn';
import SignUp from "./components/Register";
import About from "./components/About";
import Rosters from './components/Rosters';
import EditRoster from './components/EditRoster';
import DeleteRoster from './components/DeleteRoster';
// import Header from "./components/Header";
import Footer from "./components/Footer";
import PayCalc from './components/PayCalc';
import Contact from './components/Contact';
import { Container } from "@mui/material";
import Nav from "./components/Nav";

const sections = [
  {
    title: "About", url:"#about"
  },
  {
    title: "Log In", url:"#login"
  },
  {
    title: "Sign Up", url:"#register"
  },
  {
    title: "View Rosters", url:"#viewrosters"
  },
  {
    title: "Pay Calculator", url:"#paycalc"
  },
  {
    title: "Contact", url:"#contact"
  }
]

function LoadingPage() {
  return(<h1>Loading EasyPortal...</h1>);
}

function MainPage() {
  return (
      <div className="App">
        <Container maxWidth='lg'>
          <Nav title="EasyPortal" 
          sections={sections}>
          </Nav>
        </Container>
            {/* <Header /> */}
            <About />
            <LogIn />
            <SignUp />
            <Rosters />
            <EditRoster />
            <DeleteRoster />
            <PayCalc />
            <Contact />
            <Footer title={"Check weekly for roster updates!"}/>
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