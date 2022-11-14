import { React, useEffect, useState } from 'react';
import About from "./components/About";
import Rosters from './components/Rosters';
import SimpleHome from "./components/SimpleHome";
import Footer from "./components/Footer";
import PayCalc from './components/PayCalc';
import Contact from './components/Contact';
import { Container } from "@mui/material";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

const sections = [
  {
    title: "About", 
    url:"/about",
  },
  {
    title: "View Rosters", 
    url:"/viewrosters",
  },
  {
    title: "Pay Calculator", 
    url:"/paycalc",
  },
  {
    title: "Contact", 
    url:"/contact",
  }
]

function LoadingPage() {
  return(<h1>Launching EasyPortal...</h1>);
}

function MainPage() {
  return (
      <div className="App">
        <Container maxWidth='lg'>
          <Nav title="EasyPortal" 
          sections={sections}>
          </Nav>
        </Container>
        <Routes>
          <Route path="/" element={<SimpleHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/viewrosters" element={<Rosters />} />
          <Route path="/paycalc" element={<PayCalc />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
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