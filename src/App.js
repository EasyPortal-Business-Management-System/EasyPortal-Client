import { React, useEffect, useState, useReducer } from 'react';
import About from "./components/About";
import Rosters from './components/Rosters';
import SimpleHome from "./components/SimpleHome";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import LogIn from './components/LogIn';
import LogInBar from './components/LogInBar';
import { StateContext } from "./utils/stateContext";
import reducer from "./utils/stateReducer";
import ThankYouPage from './components/ThankYou';
import RosterDetails from "./components/RosterDetails";
import NewRoster from './components/NewRoster';
import { getLoggedInUser, getAdminUser } from './services/authServices';
import { getRosters } from './services/rosterServices';
import EmployeeDashboard from './components/EmployeeDashboard';
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoutes from './components/PrivateRoute';

const sections = [
  {
    title: "About", 
    url:"/about",
  },
  {
    title: "View Rosters", 
    url:"/rosters",
  }
]

function LoadingPage() {
  return(<h1>Launching EasyPortal...</h1>);
}

function MainPage() {
  return (
      <div className="App">
        <Container maxWidth='lg'>
          <LogInBar />
          <Nav title="EasyPortal" 
          sections={sections}>
          </Nav>
        </Container>
        <Routes>
          <Route path="/" element={<SimpleHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/rosters" element={<ProtectedRoutes><Rosters /></ProtectedRoutes>} />
          <Route path="/rosters/new" element={<NewRoster />} />
          <Route path="/rosters/:id" element={<RosterDetails />} />
          <Route path="/rosters/update/:id" element={<NewRoster />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
            <Footer title={"Check weekly for roster updates!"}/>
      </div>
    );
}

function App() {
  const initialState = {
    employees: [],
    loggedInUser: sessionStorage.getItem("user") || null,
    adminUser: sessionStorage.getItem("user") || null,
    auth: sessionStorage.getItem("token") || null,
  };
  const [store, dispatch] = useReducer(reducer, initialState);
  // useState to create isLoading state
  const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser, adminUser } = store;

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }

    getRosters()
    .then((employees) =>
      dispatch({ type: "setRosters", data: employees })
    )
    .catch((error) => console.log(error));
  }, [loggedInUser]);


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
    <StateContext.Provider value={{ store, dispatch }}>
     {isLoading ? <LoadingPage /> : <MainPage />} 
    </StateContext.Provider>
  );
}

export default App;