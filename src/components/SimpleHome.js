import React from "react";
import LogIn from "./LogIn";
import Rosters from "./Rosters";

const Home = () => {
    return (
        <section id="home">
            <div>
                <h1>Log in to enter the portal....</h1>
                <LogIn />
                <Rosters />
                {/* <img src="../images/entertheportal.jpg" alt="door opening" height={600} width={1100}></img> */}
            </div>
        </section>
    )
}

export default Home;